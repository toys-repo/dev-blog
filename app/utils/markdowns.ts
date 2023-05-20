class Markdowns {
  static toPlainText = (markdown: string) => {
    return markdown
      .replace(/#+\s+(.*?)\n/g, '') //remove heading blocks
      .replace(/(\*|_){1,2}(.*?)\1/g, '$2') //remove emphasis syntax
      .replace(/\[(.*?)\]\(.*?\)/g, '$1') //remove links syntax
      .replace(/!\[(.*?)\]\(.*?\)/g, '$1') //remove images syntax
      .replace(/[\-\+\*\d]\s+(.*?)\n/g, '$1') //remove lists syntax
      .replace(/^\s*>.*$/gm, '') //remove blockquotes block
      .replace(/(`{3}[\s\S]*?`{3})/g, '') //remove code blocks
      .replace(/`([^`]+)`/g, '$1') //remove inline code syntax
      .replace(/---\n/g, '') //remove horizontal blocks
      .replace(/^\s+|\s+$/g, '') //remove extra new lines blocks
      .replace(/\n{2,}/g, '\n'); //remove leading/trailing spaces syntax
  };
}

export default Markdowns;
