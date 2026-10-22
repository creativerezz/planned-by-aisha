export type WordmarkProps = {
  /** First word of the wordmark. */
  lead?: string;
  /** Small connective word set between the two names. */
  connector?: string;
  /** Second word of the wordmark. */
  trail?: string;
};

/**
 * The studio wordmark. Renders as a fragment so the caller owns the wrapping
 * element and its `.hon-wordmark` sizing.
 */
export function Wordmark({
  lead = "Planned",
  connector = "by",
  trail = "Ayesha",
}: WordmarkProps) {
  return (
    <>
      {lead}
      <span className="hon-wordmark-by">{connector}</span>
      {trail}
    </>
  );
}
