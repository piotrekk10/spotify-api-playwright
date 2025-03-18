import { Artist } from "../artists/artist";
import { ExternalUrls } from "../common/externalUrls";
import { Restrictions } from "../common/restrictions";
import { LinkedFrom } from "./linkedFrom";

export interface Track {
  artists?: Artist[];
  available_markets?: string[];
  disc_number?: number;
  duration_ms?: number;
  explicit?: boolean;
  external_urls?: ExternalUrls;
  href?: string;
  id?: string;
  is_playable?: boolean;
  linked_from?: LinkedFrom;
  restrictions?: Restrictions;
  name?: string;
  preview_url?: string;
  track_number?: number;
  type?: string;
  uri?: string;
  is_local?: boolean;
}
