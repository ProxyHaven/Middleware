export interface RequestContext {
	req: Request;
	isHTML: boolean;
	isIframe: boolean;
	isNavigate: boolean;
}
export interface ResponseContext {
	req: Request;
	res: Response;
}

type DOMProxy = Function;
export type HTMLCommmand = "skip" | "delete" | void;
export type RequestHandler = (
	ctx: RequestContext,
	DOMProxy?
) => Promise<Request | Response | void>;
// TODO: Determine type
export type WSRequestHandler = (ctx: RequestContext, DOMProxy?) => unknown;
export type ResponseHandler = (
	ctx: ResponseHandler,
	DOMProxy?
) => Promise<Response | void>;
export type HTMLHandler = (element: HTMLElement) => HTMLCommand;

interface BaseMiddleware {
	match: string | string[];
}
export interface RequestMiddleware extends BaseMiddleware {
	handler: RequestHandler;
}
export interface ResponseMiddleware extends BaseMiddleware {
	handler: ResponseHandler;
}
export interface HTMLMiddleware extends BaseMiddleware {
	handler: HTMLHandler;
}

export type Middleware =
	| RequestMiddleware
	| ResponseMiddleware
	| HTMLMiddleware;

export type MiddlewareFileExport = Middleware | Middleware[];
