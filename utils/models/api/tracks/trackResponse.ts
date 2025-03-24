import { Album } from '@/models/albums';
import { ExternalIds } from '@/models/common';
import { Track } from '@/models/tracks';

export interface TrackResponse extends Track {
  album?: Album;
  popularity?: number;
  external_ids?: ExternalIds;
}
