import { TrackDataType } from "../../data/tracks";
import { TrackResponse } from "../../types/api/tracks/trackResponse";
import { expectToEqual } from "../solutions";
import { assertArtist } from "./assertArtist";

type AssertTrackProps = {
  expectedTrack: TrackDataType;
  actualTrack: TrackResponse;
};

export const assertTrack = async ({
  expectedTrack,
  actualTrack,
}: AssertTrackProps) => {
  await expectToEqual({
    actual: actualTrack.id,
    expected: expectedTrack.id,
    description: 'Track "id"',
  });
  await expectToEqual({
    actual: actualTrack.name,
    expected: expectedTrack.name,
    description: 'Track "name"',
  });
  await expectToEqual({
    actual: actualTrack.uri,
    expected: expectedTrack.uri,
    description: 'Track "uri"',
  });
  for (const [i, artist] of actualTrack.artists!.entries()) {
    await assertArtist({
      actualArtist: actualTrack.artists![i],
      expectedArtist: expectedTrack.artists[i],
    });
  }
};
