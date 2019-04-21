export function getLyric(lyric) {
      const result = new Array();
      const tempLyric = lyric.split('\n');
      tempLyric.forEach(element => {
        const time = element.substring(element.indexOf("[") + 1, element.indexOf("]")).split(':');
        result.push({
          time: parseFloat(time[0]*60)+parseFloat(time[1]),
          lyr: element.substring(element.indexOf("]") + 1, element.length)
        })
      });
      return result;
}