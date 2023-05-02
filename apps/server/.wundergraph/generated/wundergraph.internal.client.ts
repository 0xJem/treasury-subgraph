// Code generated by wunderctl. DO NOT EDIT.

import type { OperationArgsWithInput, InternalClient as BaseClient } from "@wundergraph/sdk/server";
import type { OperationErrors } from "./ts-operation-errors";
import {
	ProtocolMetricsResponse,
	ProtocolMetricsInput,
	InternalProtocolMetricsInput,
	InjectedProtocolMetricsInput,
	ProtocolMetricsResponseData,
	ProtocolMetricsLatestResponse,
	ProtocolMetricsLatestResponseData,
	TokenRecordsResponse,
	TokenRecordsInput,
	InternalTokenRecordsInput,
	InjectedTokenRecordsInput,
	TokenRecordsResponseData,
	TokenRecordsLatestResponse,
	TokenRecordsLatestResponseData,
	TokenSuppliesResponse,
	TokenSuppliesInput,
	InternalTokenSuppliesInput,
	InjectedTokenSuppliesInput,
	TokenSuppliesResponseData,
	TokenSuppliesLatestResponse,
	TokenSuppliesLatestResponseData,
	LatestProtocolMetricsResponse,
	LatestProtocolMetricsResponseData,
	LatestTokenRecordsResponse,
	LatestTokenRecordsResponseData,
	LatestTokenSuppliesResponse,
	LatestTokenSuppliesResponseData,
	PaginatedProtocolMetricsResponse,
	PaginatedProtocolMetricsInput,
	InternalPaginatedProtocolMetricsInput,
	PaginatedProtocolMetricsResponseData,
	PaginatedTokenRecordsResponse,
	PaginatedTokenRecordsInput,
	InternalPaginatedTokenRecordsInput,
	PaginatedTokenRecordsResponseData,
	PaginatedTokenSuppliesResponse,
	PaginatedTokenSuppliesInput,
	InternalPaginatedTokenSuppliesInput,
	PaginatedTokenSuppliesResponseData,
} from "./models";

export interface Queries {
	ProtocolMetrics: (
		options: OperationArgsWithInput<InternalProtocolMetricsInput>
	) => Promise<{ data?: ProtocolMetricsResponse["data"]; errors?: Required<ProtocolMetricsResponse>["errors"] }>;
	ProtocolMetricsLatest: () => Promise<{
		data?: ProtocolMetricsLatestResponse["data"];
		errors?: Required<ProtocolMetricsLatestResponse>["errors"];
	}>;
	TokenRecords: (
		options: OperationArgsWithInput<InternalTokenRecordsInput>
	) => Promise<{ data?: TokenRecordsResponse["data"]; errors?: Required<TokenRecordsResponse>["errors"] }>;
	TokenRecordsLatest: () => Promise<{
		data?: TokenRecordsLatestResponse["data"];
		errors?: Required<TokenRecordsLatestResponse>["errors"];
	}>;
	TokenSupplies: (
		options: OperationArgsWithInput<InternalTokenSuppliesInput>
	) => Promise<{ data?: TokenSuppliesResponse["data"]; errors?: Required<TokenSuppliesResponse>["errors"] }>;
	TokenSuppliesLatest: () => Promise<{
		data?: TokenSuppliesLatestResponse["data"];
		errors?: Required<TokenSuppliesLatestResponse>["errors"];
	}>;
	LatestProtocolMetrics: () => Promise<{
		data?: LatestProtocolMetricsResponseData;
		errors?: OperationErrors["latest/protocolMetrics"][];
	}>;
	LatestTokenRecords: () => Promise<{
		data?: LatestTokenRecordsResponseData;
		errors?: OperationErrors["latest/tokenRecords"][];
	}>;
	LatestTokenSupplies: () => Promise<{
		data?: LatestTokenSuppliesResponseData;
		errors?: OperationErrors["latest/tokenSupplies"][];
	}>;
	PaginatedProtocolMetrics: (
		options: OperationArgsWithInput<InternalPaginatedProtocolMetricsInput>
	) => Promise<{
		data?: PaginatedProtocolMetricsResponseData;
		errors?: OperationErrors["paginated/protocolMetrics"][];
	}>;
	PaginatedTokenRecords: (
		options: OperationArgsWithInput<InternalPaginatedTokenRecordsInput>
	) => Promise<{ data?: PaginatedTokenRecordsResponseData; errors?: OperationErrors["paginated/tokenRecords"][] }>;
	PaginatedTokenSupplies: (
		options: OperationArgsWithInput<InternalPaginatedTokenSuppliesInput>
	) => Promise<{ data?: PaginatedTokenSuppliesResponseData; errors?: OperationErrors["paginated/tokenSupplies"][] }>;
}

export interface Mutations {}

export interface InternalClient extends BaseClient<Queries, Mutations> {}