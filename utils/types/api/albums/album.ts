import { Artist } from "../artists/artist";
import { ExternalUrls } from "../common/externalUrls";
import { Image } from "../common/image";
import { Restrictions } from "../common/restrictions";

export interface Album {
  album_type: string;
  total_tracks: number;
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
}
