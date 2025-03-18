import { Followers } from "../artists/followers";
import { ExternalUrls } from "../common/externalUrls";
import { Image } from "../common/image";

export interface ArtistResponse {
  external_urls?: ExternalUrls;
  followers?: Followers;
  genres?: string[];
  href?: string;
  id?: string;
  images?: Image[];
  name?: string;
  popularity?: number;
  type?: string;
  uri?: string;
}
