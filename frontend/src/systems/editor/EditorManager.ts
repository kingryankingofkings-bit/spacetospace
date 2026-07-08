export interface SceneNodeData {
  id: string;
  type: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  props?: Record<string, any>;
}

export interface SceneData {
  nodes: SceneNodeData[];
}

export class EditorManager {
  static async saveScene(data: SceneData): Promise<boolean> {
    try {
      const res = await fetch('http://localhost:3001/api/save-scene', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (json.success) {
        console.log("Scene saved successfully!");
        return true;
      } else {
        console.error("Failed to save scene:", json.error);
        return false;
      }
    } catch (e) {
      console.error("Error connecting to editor server:", e);
      return false;
    }
  }

  static async loadScene(): Promise<SceneData | null> {
    try {
      const res = await fetch('/data/scene.json');
      if (res.ok) {
        return await res.json();
      }
      return null;
    } catch (e) {
      console.error("Failed to load scene.json", e);
      return null;
    }
  }
}
