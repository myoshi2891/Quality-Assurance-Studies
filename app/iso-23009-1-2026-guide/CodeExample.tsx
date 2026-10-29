import React from 'react';
const EXAMPLES = [
  "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<MPD xmlns=\"urn:mpeg:dash:schema:mpd:2011\"\n     type=\"static\"\n     mediaPresentationDuration=\"PT10M\"\n     minBufferTime=\"PT2S\"\n     profiles=\"urn:mpeg:dash:profile:isoff-on-demand:2011\">\n  <Period>\n    <AdaptationSet contentType=\"video\" mimeType=\"video/mp4\" segmentAlignment=\"true\">\n      <Representation id=\"v1080\" bandwidth=\"5000000\" width=\"1920\" height=\"1080\" codecs=\"avc1.640028\">\n        <BaseURL>video_1080.mp4</BaseURL>\n        <SegmentBase indexRange=\"800-1500\"/>\n      </Representation>\n      <Representation id=\"v360\" bandwidth=\"800000\" width=\"640\" height=\"360\" codecs=\"avc1.64001e\">\n        <BaseURL>video_360.mp4</BaseURL>\n        <SegmentBase indexRange=\"800-1500\"/>\n      </Representation>\n    </AdaptationSet>\n  </Period>\n</MPD>",
  "<MPD xmlns=\"urn:mpeg:dash:schema:mpd:2011\"\n     type=\"dynamic\"\n     availabilityStartTime=\"2026-10-08T00:00:00Z\"\n     minimumUpdatePeriod=\"PT2S\"\n     timeShiftBufferDepth=\"PT30S\"\n     minBufferTime=\"PT2S\"\n     profiles=\"urn:mpeg:dash:profile:isoff-live:2011\">\n  <Period id=\"1\" start=\"PT0S\">\n    <AdaptationSet contentType=\"video\" mimeType=\"video/mp4\" segmentAlignment=\"true\">\n      <SegmentTemplate timescale=\"90000\"\n                       initialization=\"video_$RepresentationID$_init.mp4\"\n                       media=\"video_$RepresentationID$_$Time$.m4s\">\n        <SegmentTimeline>\n          <S t=\"0\" d=\"360000\" r=\"9\"/>\n        </SegmentTimeline>\n      </SegmentTemplate>\n      <Representation id=\"v720\" bandwidth=\"3000000\" width=\"1280\" height=\"720\" codecs=\"avc1.64001f\"/>\n    </AdaptationSet>\n  </Period>\n</MPD>"
];
const TOKENS = /("[^"\n]*"|<\/?[A-Za-z][\w:]*|[\w:]+(?==))/g;
function highlight(line: string) {
return line.split(TOKENS).map((token, i) => {
const kind = token.startsWith('"') ? 't-str' : token.startsWith('<?') ? 't-meta' : token.startsWith('<') ? 't-tag' : /^[\w:]+$/.test(token) ? 't-attr' : '';
return kind ? <span key={i} className={kind}>{token}</span> : token;
});
}
export default function CodeExample({ index }: { index: number }) {
const lines = EXAMPLES[index]!.split('\n');
return <pre className="xml"><code>{lines.map((line, i) => <div className="code-line" key={i}>{highlight(line)}{i < lines.length - 1 ? '\n' : null}</div>)}</code></pre>;
}
