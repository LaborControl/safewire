import {
  DeleteObjectCommand,
  GetObjectCommand,
  HeadObjectCommand,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const SCW_REGION = process.env.SCW_REGION ?? "fr-par";
const SCW_ENDPOINT = process.env.SCW_ENDPOINT ?? "https://s3.fr-par.scw.cloud";
const SCW_BUCKET = process.env.SCW_BUCKET ?? "";
const SCW_ACCESS_KEY = process.env.SCW_ACCESS_KEY ?? "";
const SCW_SECRET_KEY = process.env.SCW_SECRET_KEY ?? "";

/**
 * Check if Scaleway Object Storage is configured
 * Returns false if credentials are missing
 */
export function is_storage_configured(): boolean {
  return Boolean(SCW_ACCESS_KEY && SCW_SECRET_KEY && SCW_BUCKET);
}

/**
 * Get S3 client instance (lazy initialization)
 * Throws error if credentials are not configured
 */
function get_s3_client(): S3Client {
  if (!is_storage_configured()) {
    throw new Error(
      "Scaleway Object Storage not configured. Set SCW_ACCESS_KEY, SCW_SECRET_KEY, and SCW_BUCKET environment variables."
    );
  }

  return new S3Client({
    region: SCW_REGION,
    endpoint: SCW_ENDPOINT,
    credentials: {
      accessKeyId: SCW_ACCESS_KEY,
      secretAccessKey: SCW_SECRET_KEY,
    },
  });
}

type StorageResult<T> =
  | { success: true; data: T }
  | { success: false; error: { code: string; message: string } };

/**
 * Upload a document to Scaleway Object Storage
 * @param key - The object key (path in bucket)
 * @param body - The file content as Buffer
 * @param content_type - MIME type of the document
 */
export async function upload_document(
  key: string,
  body: Buffer,
  content_type: string
): Promise<StorageResult<{ key: string; etag: string | undefined }>> {
  try {
    const command = new PutObjectCommand({
      Bucket: SCW_BUCKET,
      Key: key,
      Body: body,
      ContentType: content_type,
    });

    const response = await get_s3_client().send(command);

    return {
      success: true,
      data: {
        key,
        etag: response.ETag,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: "UPLOAD_FAILED",
        message: error instanceof Error ? error.message : "Failed to upload document",
      },
    };
  }
}

/**
 * Get a presigned URL for downloading a document
 * @param key - The object key (path in bucket)
 * @param expires_in - URL expiration time in seconds (default: 1 hour)
 */
export async function get_document_url(
  key: string,
  expires_in = 3600
): Promise<StorageResult<{ url: string; expires_in: number }>> {
  try {
    const command = new GetObjectCommand({
      Bucket: SCW_BUCKET,
      Key: key,
    });

    const url = await getSignedUrl(get_s3_client(), command, { expiresIn: expires_in });

    return {
      success: true,
      data: {
        url,
        expires_in,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: "URL_GENERATION_FAILED",
        message: error instanceof Error ? error.message : "Failed to generate document URL",
      },
    };
  }
}

/**
 * Delete a document from Scaleway Object Storage
 * @param key - The object key (path in bucket)
 */
export async function delete_document(
  key: string
): Promise<StorageResult<{ key: string; deleted: boolean }>> {
  try {
    const command = new DeleteObjectCommand({
      Bucket: SCW_BUCKET,
      Key: key,
    });

    await get_s3_client().send(command);

    return {
      success: true,
      data: {
        key,
        deleted: true,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: "DELETE_FAILED",
        message: error instanceof Error ? error.message : "Failed to delete document",
      },
    };
  }
}

/**
 * Check if a document exists in Scaleway Object Storage
 * @param key - The object key (path in bucket)
 */
export async function document_exists(
  key: string
): Promise<StorageResult<{ exists: boolean; size: number | undefined }>> {
  try {
    const command = new HeadObjectCommand({
      Bucket: SCW_BUCKET,
      Key: key,
    });

    const response = await get_s3_client().send(command);

    return {
      success: true,
      data: {
        exists: true,
        size: response.ContentLength,
      },
    };
  } catch (error) {
    // NotFound is expected when document doesn't exist
    if (error instanceof Error && error.name === "NotFound") {
      return {
        success: true,
        data: {
          exists: false,
          size: undefined,
        },
      };
    }

    return {
      success: false,
      error: {
        code: "CHECK_FAILED",
        message: error instanceof Error ? error.message : "Failed to check document existence",
      },
    };
  }
}

/**
 * Get a presigned URL for uploading a document directly from client
 * @param key - The object key (path in bucket)
 * @param content_type - MIME type of the document
 * @param expires_in - URL expiration time in seconds (default: 15 minutes)
 */
export async function get_upload_url(
  key: string,
  content_type: string,
  expires_in = 900
): Promise<StorageResult<{ url: string; key: string; expires_in: number }>> {
  try {
    const command = new PutObjectCommand({
      Bucket: SCW_BUCKET,
      Key: key,
      ContentType: content_type,
    });

    const url = await getSignedUrl(get_s3_client(), command, { expiresIn: expires_in });

    return {
      success: true,
      data: {
        url,
        key,
        expires_in,
      },
    };
  } catch (error) {
    return {
      success: false,
      error: {
        code: "URL_GENERATION_FAILED",
        message: error instanceof Error ? error.message : "Failed to generate upload URL",
      },
    };
  }
}
