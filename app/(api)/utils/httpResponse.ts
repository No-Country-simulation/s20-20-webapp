import { NextResponse } from "next/server";
export enum HttpStatus {
  OK = 200,
  Bad_Request = 400,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
}

export class HttpResponse {
  Ok(data?: unknown) {
    return NextResponse.json(
      {
        status: HttpStatus.OK,
        statusMsg: "Success",
        data: data,
      },
      {
        status: HttpStatus.OK,
      }
    );
  }
  BadRequest(data?: unknown) {
    return NextResponse.json(
      {
        status: HttpStatus.Bad_Request,
        statusMsg: "Bad request",
        error: data,
      },
      {
        status: HttpStatus.Bad_Request,
      }
    );
  }
  NotFound(data?: unknown): Response {
    return NextResponse.json(
      {
        status: HttpStatus.NOT_FOUND,
        statusMsg: "Not found",
        error: data,
      },
      {
        status: HttpStatus.NOT_FOUND,
      }
    );
  }
  Unauthorized(data?: unknown): Response {
    return NextResponse.json(
      {
        status: HttpStatus.UNAUTHORIZED,
        statusMsg: "Unauthorized",
        error: data,
      },
      {
        status: HttpStatus.UNAUTHORIZED,
      }
    );
  }
  Forbidden(data?: unknown): Response {
    return NextResponse.json(
      {
        status: HttpStatus.FORBIDDEN,
        statusMsg: "Forbidden",
        error: data,
      },
      {
        status: HttpStatus.FORBIDDEN,
      }
    );
  }
  InternalServerError(data?: unknown): Response {
    return NextResponse.json(
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        statusMsg: "Internal Server Error",
        error: data,
      },
      {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      }
    );
  }
}
