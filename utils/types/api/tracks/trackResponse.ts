import { Album } from "../albums/album";
import { Artist } from "../artists/artist";
import { ExternalIds } from "../common/externalIds";
import { ExternalUrls } from "../common/externalUrls";
import { Restrictions } from "../common/restrictions";
import { LinkedFrom } from "./linkedFrom";

export interface TrackResponse {
  album?: Album;
  artists?: Artist[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_ids?: ExternalIds;
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
  is_playable?: boolean;
  linked_from?: LinkedFrom;
  restrictions?: Restrictions;
  name?: string;
  popularity?: number;
  preview_url?: string;
  track_number?: number;
  type?: string;
  uri?: string;
  is_local?: boolean;
}
