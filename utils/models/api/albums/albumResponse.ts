import { Album } from '@/models/albums';
import { Copyright, ExternalIds, Restrictions } from '@/models/common';
import { Tracks } from '@/models/tracks';

export interface AlbumResponse extends Album {
  tracks: Tracks;
  copyrights: Copyright[];
  external_ids: ExternalIds;
  genres: string[];
  label: string;
  popularity: number;
  restrictions?: Restrictions;
  is_playable?: boolean;
}
