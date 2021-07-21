/* eslint-disable max-len */
import {Request, ResponseToolkit, ResponseObject} from '@hapi/hapi';

/**
 *
 * @param {Request} request The HTTP Request.
 * @param {ResponseToolkit} h The HTTp response.
 * @return {ResponseObject} response A Http response.
 */
export async function index(request: Request, h: ResponseToolkit): Promise<ResponseObject> {
  const response = h.response('Server works');
  return response;
}
