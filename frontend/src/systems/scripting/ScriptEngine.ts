export class ScriptEngine {
  /**
   * Evaluates a script string with a given context.
   */
  static evaluate(scriptContent: string, context: Record<string, any>) {
    try {
      const keys = Object.keys(context);
      const values = keys.map(k => context[k]);
      
      // Create a function that expects the context keys as arguments
      const fn = new Function(...keys, scriptContent);
      fn(...values);
    } catch (e) {
      console.error('Script Evaluation Error:', e);
    }
  }

  /**
   * Fetches a script from a URL and evaluates it
   */
  static async loadAndExecute(url: string, context: Record<string, any>) {
    try {
      const response = await fetch(url);
      const text = await response.text();
      this.evaluate(text, context);
    } catch (e) {
      console.error('Failed to load script:', url, e);
    }
  }
}
