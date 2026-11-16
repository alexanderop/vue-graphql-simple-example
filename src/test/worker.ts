import { setupWorker } from "msw/browser";
import { graphql } from "msw/graphql";

export const API_URL = "https://countries.trevorblades.com/graphql";

export const worker = setupWorker();
export const api = graphql.link(API_URL);
