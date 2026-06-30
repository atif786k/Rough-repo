import { useState } from "react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

export default function SplineMCPDemo() {
  const [command, setCommand] = useState("");
  const [response, setResponse] = useState("");

  const handleSendCommand = async () => {
    if (!command) return;
    
    // Simulating AI processing (replace with real API call)
    const processedCommand = `Executing: ${command}`;
    setResponse(processedCommand);
    
    // TODO: Implement WebSocket or API call to Spline (if external control is found)
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <div className="w-full max-w-lg p-4 shadow-lg">
        {/* <CardContent> */}
          <h2 className="text-xl font-bold mb-4">Spline MCP Demo</h2>
          <input
            type="text"
            placeholder="Enter command (e.g., 'Create a red cube')"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            className="mb-4"
          />
          <button onClick={handleSendCommand} className="w-full">
            Send Command
          </button>
          {response && (
            <p className="mt-4 p-2 bg-gray-100 rounded-lg">{response}</p>
          )}
        {/* </CardContent> */}
      </div>
    </div>
  );
}
