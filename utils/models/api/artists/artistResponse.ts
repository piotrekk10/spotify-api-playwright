import { Artist, Followers } from '@/models/artists';
import { Image } from '@/models/common';

export interface ArtistResponse extends Artist {
  followers?: Followers;
  genres?: string[];
  images?: Image[];
  popularity?: number;
}
