import { Key } from "./key";

export function Keyboard() {
  return (
    <div className="keyboard-container">
      <ol className="keyboard">
        <Key></Key>
      </ol>
    </div>
  );
}
