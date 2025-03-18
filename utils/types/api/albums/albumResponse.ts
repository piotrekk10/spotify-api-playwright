import { Artist } from "../artists/artist";
import { Copyright } from "../common/copyright";
import { ExternalIds } from "../common/externalIds";
import { ExternalUrls } from "../common/externalUrls";
import { Image } from "../common/image";
import { Restrictions } from "../common/restrictions";
import { Tracks } from "../tracks/tracks";

export interface AlbumResponse {
  album_type: string;
  total_tracks: string;
  available_markets: string[];
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  restrictions?: Restrictions;
  type: string;
  uri: string;
  artists: Artist[];
  tracks: Tracks;
  copyrights: Copyright[];
  external_ids: ExternalIds;
  genres: string[];
  label: string;
  popularity: number;
}
