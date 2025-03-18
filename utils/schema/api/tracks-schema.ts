import { JSONSchemaType } from "ajv";
import { TrackResponse } from "../../types/api/tracks/trackResponse";

export const tracksSchema: JSONSchemaType<TrackResponse> = {
  type: "object",
  properties: {
    album: {
      type: "object",
      properties: {
        album_type: { type: "string" },
        total_tracks: { type: "integer" },
        available_markets: {
          type: "array",
          items: { type: "string" },
        },
        external_urls: {
          type: "object",
          properties: {
            spotify: { type: "string" },
          },
          required: [],
        },
        href: { type: "string" },
        id: { type: "string" },
        images: {
          type: "array",
          items: {
            type: "object",
            properties: {
              url: { type: "string" },
              height: { type: ["integer", "null"] },
              width: { type: ["integer", "null"] },
            },
            required: ["url", "height", "width"],
          },
        },
        name: { type: "string" },
        release_date: { type: "string" },
        release_date_precision: { type: "string" },
        restrictions: {
          type: "object",
          properties: {
            reason: { type: "string" },
          },
          required: [],
        },
        type: { type: "string" },
        uri: { type: "string" },
        artists: {
          type: "array",
          items: {
            type: "object",
            properties: {
              external_urls: {
                type: "object",
                properties: {
                  spotify: { type: "string" },
                },
                required: [],
              },
              href: { type: "string" },
              id: { type: "string" },
              name: { type: "string" },
              type: { type: "string" },
              uri: { type: "string" },
            },
            required: [],
          },
        },
      },
      required: [
        "album_type",
        "total_tracks",
        "available_markets",
        "external_urls",
        "href",
        "id",
        "images",
        "name",
        "release_date",
        "release_date_precision",
        "type",
        "uri",
        "artists",
      ],
    },
    artists: {
      type: "array",
      items: {
        type: "object",
        properties: {
          external_urls: {
            type: "object",
            properties: {
              spotify: { type: "string" },
            },
            required: [],
          },
          href: { type: "string" },
          id: { type: "string" },
          name: { type: "string" },
          type: { type: "string" },
          uri: { type: "string" },
        },
        required: [],
      },
    },
    available_markets: {
      type: "array",
      items: { type: "string" },
    },
    disc_number: { type: "integer" },
    duration_ms: { type: "integer" },
    explicit: { type: "boolean" },
    external_ids: {
      type: "object",
      properties: {
        isrc: { type: "string" },
        ean: { type: "string" },
        upc: { type: "string" },
      },
      required: [],
    },
    external_urls: {
      type: "object",
      properties: {
        spotify: { type: "string" },
      },
      required: [],
    },
    href: { type: "string" },
    id: { type: "string" },
    is_playable: { type: "boolean" },
    linked_from: { type: "object", additionalProperties: false },
    restrictions: {
      type: "object",
      properties: {
        reason: { type: "string" },
      },
      required: [],
    },
    name: { type: "string" },
    popularity: { type: "integer" },
    preview_url: { type: ["string", "null"] },
    track_number: { type: "integer" },
    type: { type: "string" },
    uri: { type: "string" },
    is_local: { type: "boolean" },
  },
  required: [],
};