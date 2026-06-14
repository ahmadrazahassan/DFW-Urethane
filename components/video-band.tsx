import { showcaseVideo } from "@/lib/content";

/** Full-bleed showcase video with rounded corners + cream margin, like the
 *  other framed sections. Served at full quality (no re-encoding). */
export function VideoBand() {
  return (
    <section className="bg-cream p-2 sm:p-3">
      <div className="overflow-hidden rounded-[32px]">
        <video
          className="block aspect-video w-full object-cover"
          src={showcaseVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </section>
  );
}
