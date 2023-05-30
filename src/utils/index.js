// 将css字符串转换为style对象
export function transformStyle(css) {
    if (!css.length)
        return {};
    const style = {};
    css = css.join('');
    const cssLines = transformLines(css);
    cssLines.forEach((line) => {
        line = line.substring(0, line.lastIndexOf(';') > 0 ? line.lastIndexOf(';') : line.length);
        let [attribute, value] = line.split(':');
        // 改为小驼峰
        attribute = attribute.replace(/-(.*)/i, (_, p1) => `${p1[0].toUpperCase()}${p1.substring(1)}`);
        style[attribute.trim()] = value.trim();
    });
    return style;
}

export function transformLines(string) {
    return string.split(/\n/).filter(line => Boolean(line.trim()));
}