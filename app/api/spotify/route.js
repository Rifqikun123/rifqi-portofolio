
import getNowPlayingItem from "../../about/components/about/spotify/fetch";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await getNowPlayingItem();

    return Response.json(result, {
      headers: {
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    return Response.json(
      { isPlaying: false },
      { status: 500 }
    );
  }
}
