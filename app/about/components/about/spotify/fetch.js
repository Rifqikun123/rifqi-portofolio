
import "server-only";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  if (!clientId || !clientSecret || !refreshToken) {
    return null;
  }

  const basic = Buffer.from(
    `${clientId}:${clientSecret}`
  ).toString("base64");

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
    }),
    cache: "no-store",
  });

  if (!response.ok) return null;

  const data = await response.json();
  return data.access_token || null;
};

export default async function getNowPlayingItem() {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return { isPlaying: false };
  }

  const response = await fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    cache: "no-store",
  });

  if (!response.ok || response.status === 204) {
    return { isPlaying: false };
  }

  const song = await response.json();

  if (!song.item) {
    return { isPlaying: false };
  }

  return {
    albumImageUrl: song.item.album?.images?.[0]?.url || "",
    artist: song.item.artists
      .map((artist) => artist.name)
      .join(", "),
    isPlaying: song.is_playing,
    songUrl: song.item.external_urls.spotify,
    title: song.item.name,
  };
}
