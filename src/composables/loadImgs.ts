/**
 * 加载图片
 * @param source
 * @param target
 */
export const loadImgs = async (source: Array<() => Promise<string>>, target: { value: string[] }): Promise<void> => {

    for (const key in source) {

        if (source.hasOwnProperty(key)) { // 确保key不是原型链上的属性

            try {

                const url = await source[key]();

                target.value.push(url);

            } catch (error) {

                console.error(`Error loading icon ${key}:`, error);

            }

        }

    }

};