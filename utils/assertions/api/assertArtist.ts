import { Artist } from "../../types/api/artists/artist";
import { expectToEqual } from "../solutions";
import { assertExternalUrls } from "./assertExternalUrl";

type AssertArtistProps = {
  expectedArtist: Artist;
  actualArtist: Artist;
};

export const assertArtist = async ({
  expectedArtist,
  actualArtist,
}: AssertArtistProps) => {
  await expectToEqual({
    actual: actualArtist.id,
    expected: expectedArtist.id,
    description: 'Artist "id"',
  });
  await expectToEqual({
    actual: actualArtist.name,
    expected: expectedArtist.name,
    description: 'Artist "name"',
  });
  await expectToEqual({
    actual: actualArtist.type,
    expected: expectedArtist.type,
    description: 'Artist "type"',
  });
  await expectToEqual({
    actual: actualArtist.uri,
    expected: expectedArtist.uri,
    description: 'Artist "uri"',
  });
  await expectToEqual({
    actual: actualArtist.href,
    expected: expectedArtist.href,
    description: 'Artist "href"',
  });
  await assertExternalUrls({
    expectedExternalUrls: expectedArtist.external_urls!,
    actualExternalUrls: actualArtist.external_urls!,
    description: 'Artist -> '
  });
};
