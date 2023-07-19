/**
 * @module colorUtils
 * @version 1.0.0
 * @type {Object}
 */
const Color = function (exports) {
    const rgbaRegExp = '(\\.\\d+|\\d+\\.\\d+|\\d+)'
    const hslaRegExp = '(\\.\\d+%?|\\d+\\.\\d+%?|\\d+%?)'
    const labRegExp = '(-?\\.\\d+|-?\\d+\\.\\d+|-?\\d+)'
    /**
     * @define
     */
    const define = {
        'ALICEBLUE': '#F0F8FF',
        'ANTIQUEWHITE': '#FAEBD7',
        'AQUA': '#00FFFF',
        'AQUAMARINE': '#7FFFD4',
        'AZURE': '#F0FFFF',
        'BEIGE': '#F5F5DC',
        'BISQUE': '#FFE4C4',
        'BLACK': '#000000',
        'BLANCHEDALMOND': '#FFEBCD',
        'BLUE': '#0000FF',
        'BLUEVIOLET': '#8A2BE2',
        'BROWN': '#A52A2A',
        'BURLYWOOD': '#DEB887',
        'CADETBLUE': '#5F9EA0',
        'CHARTREUSE': '#7FFF00',
        'CHOCOLATE': '#D2691E',
        'CORAL': '#FF7F50',
        'CORNFLOWERBLUE': '#6495ED',
        'CORNSILK': '#FFF8DC',
        'CRIMSON': '#DC143C',
        'CYAN': '#00FFFF',
        'DARKBLUE': '#00008B',
        'DARKCYAN': '#008B8B',
        'DARKGOLDENROD': '#B8860B',
        'DARKGRAY': '#A9A9A9',
        'DARKGREY': '#A9A9A9',
        'DARKGREEN': '#006400',
        'DARKKHAKI': '#BDB76B',
        'DARKMAGENTA': '#8B008B',
        'DARKOLIVEGREEN': '#556B2F',
        'DARKORANGE': '#FF8C00',
        'DARKORCHID': '#9932CC',
        'DARKRED': '#8B0000',
        'DARKSALMON': '#E9967A',
        'DARKSEAGREEN': '#8FBC8F',
        'DARKSLATEBLUE': '#483D8B',
        'DARKSLATEGRAY': '#2F4F4F',
        'DARKSLATEGREY': '#2F4F4F',
        'DARKTURQUOISE': '#00CED1',
        'DARKVIOLET': '#9400D3',
        'DEEPPINK': '#FF1493',
        'DEEPSKYBLUE': '#00BFFF',
        'DIMGRAY': '#696969',
        'DIMGREY': '#696969',
        'DODGERBLUE': '#1E90FF',
        'FIREBRICK': '#B22222',
        'FLORALWHITE': '#FFFAF0',
        'FORESTGREEN': '#228B22',
        'FUCHSIA': '#FF00FF',
        'GAINSBORO': '#DCDCDC',
        'GHOSTWHITE': '#F8F8FF',
        'GOLD': '#FFD700',
        'GOLDENROD': '#DAA520',
        'GRAY': '#808080',
        'GREY': '#808080',
        'GREEN': '#008000',
        'GREENYELLOW': '#ADFF2F',
        'HONEYDEW': '#F0FFF0',
        'HOTPINK': '#FF69B4',
        'INDIANRED ': '#CD5C5C',
        'INDIGO  ': '#4B0082',
        'IVORY': '#FFFFF0',
        'KHAKI': '#F0E68C',
        'LAVENDER': '#E6E6FA',
        'LAVENDERBLUSH': '#FFF0F5',
        'LAWNGREEN': '#7CFC00',
        'LEMONCHIFFON': '#FFFACD',
        'LIGHTBLUE': '#ADD8E6',
        'LIGHTCORAL': '#F08080',
        'LIGHTCYAN': '#E0FFFF',
        'LIGHTGOLDENRODYELLOW': '#FAFAD2',
        'LIGHTGRAY': '#D3D3D3',
        'LIGHTGREY': '#D3D3D3',
        'LIGHTGREEN': '#90EE90',
        'LIGHTPINK': '#FFB6C1',
        'LIGHTSALMON': '#FFA07A',
        'LIGHTSEAGREEN': '#20B2AA',
        'LIGHTSKYBLUE': '#87CEFA',
        'LIGHTSLATEGRAY': '#778899',
        'LIGHTSLATEGREY': '#778899',
        'LIGHTSTEELBLUE': '#B0C4DE',
        'LIGHTYELLOW': '#FFFFE0',
        'LIME': '#00FF00',
        'LIMEGREEN': '#32CD32',
        'LINEN': '#FAF0E6',
        'MAGENTA': '#FF00FF',
        'MAROON': '#800000',
        'MEDIUMAQUAMARINE': '#66CDAA',
        'MEDIUMBLUE': '#0000CD',
        'MEDIUMORCHID': '#BA55D3',
        'MEDIUMPURPLE': '#9370DB',
        'MEDIUMSEAGREEN': '#3CB371',
        'MEDIUMSLATEBLUE': '#7B68EE',
        'MEDIUMSPRINGGREEN': '#00FA9A',
        'MEDIUMTURQUOISE': '#48D1CC',
        'MEDIUMVIOLETRED': '#C71585',
        'MIDNIGHTBLUE': '#191970',
        'MINTCREAM': '#F5FFFA',
        'MISTYROSE': '#FFE4E1',
        'MOCCASIN': '#FFE4B5',
        'NAVAJOWHITE': '#FFDEAD',
        'NAVY': '#000080',
        'OLDLACE': '#FDF5E6',
        'OLIVE': '#808000',
        'OLIVEDRAB': '#6B8E23',
        'ORANGE': '#FFA500',
        'ORANGERED': '#FF4500',
        'ORCHID': '#DA70D6',
        'PALEGOLDENROD': '#EEE8AA',
        'PALEGREEN': '#98FB98',
        'PALETURQUOISE': '#AFEEEE',
        'PALEVIOLETRED': '#DB7093',
        'PAPAYAWHIP': '#FFEFD5',
        'PEACHPUFF': '#FFDAB9',
        'PERU': '#CD853F',
        'PINK': '#FFC0CB',
        'PLUM': '#DDA0DD',
        'POWDERBLUE': '#B0E0E6',
        'PURPLE': '#800080',
        'RED': '#FF0000',
        'ROSYBROWN': '#BC8F8F',
        'ROYALBLUE': '#4169E1',
        'SADDLEBROWN': '#8B4513',
        'SALMON': '#FA8072',
        'SANDYBROWN': '#F4A460',
        'SEAGREEN': '#2E8B57',
        'SEASHELL': '#FFF5EE',
        'SIENNA': '#A0522D',
        'SILVER': '#C0C0C0',
        'SKYBLUE': '#87CEEB',
        'SLATEBLUE': '#6A5ACD',
        'SLATEGRAY': '#708090',
        'SLATEGREY': '#708090',
        'SNOW': '#FFFAFA',
        'SPRINGGREEN': '#00FF7F',
        'STEELBLUE': '#4682B4',
        'TAN': '#D2B48C',
        'TEAL': '#008080',
        'THISTLE': '#D8BFD8',
        'TOMATO': '#FF6347',
        'TURQUOISE': '#40E0D0',
        'VIOLET': '#EE82EE',
        'WHEAT': '#F5DEB3',
        'WHITE': '#FFFFFF',
        'WHITESMOKE': '#F5F5F5',
        'YELLOW': '#FFFF00',
        'YELLOWGREEN': '#9ACD32'
    }


    const normalColors = {
        "red": ['#FFB6C1', '#FF69B4', '#FF1493', '#C71585'],
        "orange": ['#FFA500', '#FF4500'],
        "yellow": ['#FFD700', '#FFFF00', '#FFFFE0'],
        "green": ['#90EE90', '#006400', '#00FF7F'],
        "blue": ['#87CEFA', '#00BFFF', '#1E90FF'],
        "purple": ['#EE82EE', '#BA55D3', '#8B008B'],
        "white_black": ['#F5F5F5', '#FFFAFA', '#D3D3D3', '#000000']
    };
    //这些色彩组合包括暖色调、冷色调、鲜艳的、柔和的、单色的、自然的、霓虹的、海洋的和日落的色彩等主题，每个主题都有自己特色的色彩搭配。
    const themeColors = {
        "warmTones": ['#FF5733', '#FFC300', '#DAF7A6', '#581845'],
        "coolTones": ['#CCE5FF', '#99D9EA', '#00CED1', '#274156'],
        "vibrant": ['#FF4500', '#FF8C00', '#FFD700', '#ADFF2F'],
        "pastels": ['#FFDAB9', '#FFFACD', '#E6E6FA', '#F5FFFA'],
        "monochromatic": ['#808080', '#A9A9A9', '#C0C0C0', '#D3D3D3'],
        "nature": ['#556B2F', '#8FBC8F', '#20B2AA', '#66CDAA'],
        "neon": ['#39FF14', '#3DFAFF', '#FF355E', '#FF00CC'],
        "ocean": ['#1E90FF', '#00BFFF', '#87CEFA', '#B0E0E6'],
        "sunset": ['#FF4500', '#FF6347', '#FFA07A', '#FFDAB9'],
    };
    //这些色彩组合包括柔和的粉彩、土色调、秋天的阴影、朦胧的黎明和早晨的薄雾等主题，每个主题都有自己独特的柔和色彩搭配。
    const softColors = {
        "softPastels": ['#FED8B1', '#FEE6CE', '#FEE2DF', '#E7E6E9'],
        "earthTones": ['#D7CCC8', '#A69B97', '#696060', '#423D33'],
        "autumnShades": ['#DDA288', '#BC9A85', '#80746D', '#574634'],
        "duskyDawn": ['#FFFAF4', '#EEE2DF', '#CDC1C5', '#ACAAB7'],
        "morningMist": ['#DCE1E3', '#D3DCE3', '#C5DCE3', '#B7D7E3']
    };
    //情绪色彩组合
    const sentimentColors = {
        relaxing: ['#ACE1AF', '#A1C3D1', '#76D7EA', '#88D8B0', '#C8E6C9'],
        exciting: ['#FF4500', '#FF6347', '#FFA500', '#FFD700', '#FF0000'],
        happy: ['#FFFF00', '#ADFF2F', '#FFD700', '#EEE8AA', '#F0E68C'],
        sad: ['#708090', '#778899', '#2F4F4F', '#4682B4', '#708090'],
    }
    // Color combination objects for various scenarios, like normal use, thematic use, soft use, and for expressing sentiments.
    const prefabricate = {
        'normal': normalColors,
        'theme': themeColors,
        'soft': softColors,
        'sentiment': sentimentColors,
    }


    /**
     * @description Gets all color theme sets.
     * @param {string} theme - The desired theme.
     * @returns {Object} The color sets of the theme.
     */
    exports.getThemeColorsAll = function (theme) {
        if (prefabricate[theme])
            return prefabricate[theme]
        else return prefabricate
    }
    /**
     * @description Gets a specific color set from a theme.
     * @param {string} type - The category of the theme.
     * @param {string} theme - The specific theme in the category.
     * @returns {Array<string>} The color set of the theme.
     */
    exports.getThemeColors = function (type, theme) {
        if (prefabricate[type] && prefabricate[type][theme])
            return prefabricate[type][theme]
        return false
    }
    const mark = {
        id: '',
        change: function () {
            const str = '0123456789ABCDEFGHIJKLMNOPQRSTTUVWXYZ'
            this.id = ''
            for (let i = 0; i < 35; i++) {
                this.id += str.charAt(Math.floor(Math.random() * str.length))
            }

        }
    }
    /**
     * @description Object to manage the list of plugins.
     * @type {Object}
     */
    const plug = {
        'checks_public': [],
        'checks_fn': [],
        'color': [],
    }
    /**
     * @description The default structure of a plugin object.
     * @type {Object}
     */
    const _plug = {
        id: '',
        type: 'checks_fn',
        description: '本插件可以checks函数扩展修改处理具体格式的颜色函数和方法',
        fn: {
            init: function (publicFn, typeToFn, color) {

            }
        }
    } || {
        id: '',
        type: 'checks_public',
        description: '本插件可以checks函数扩展修改使用内置工具',
        fn: {
            init: function (publicFn) {

            }
        }
    } || {
        id: '',
        type: 'color',
        description: '本插件可以修改Color的内部对象',
        fn: {
            init: function (exports) {

            }
        }
    }
    /**
     * @description A map object to store registered plugins.
     * @type {Map}
     */
    const plugins = new Map()
    /**
     * @description Registers plugins to the library.
     * @param {...Object | Object[]} plugs - One or more plugin objects.
     * @returns {Object} An object with a `run` method to run the registered plugins.
     * @example{
     *         id: '',
     *         type: 'checks_fn',
     *         description: 'This plugin can extend the checks function to modify the color functions and methods for handling specific formats',
     *         fn: {
     *             init: function (publicFn, typeToFn, color) {
     *
     *             }
     *         }
     *     } || {
     *         id: '',
     *         type: 'checks_public',
     *         description: 'This plugin can be modified using the checks function extension using the built-in tools',
     *         fn: {
     *             init: function (publicFn) {
     *
     *             }
     *         }
     *     } || {
     *         id: '',
     *         type: 'color',
     *         description: 'This plugin can modify Color internal objects',
     *         fn: {
     *             init: function (exports) {
     *
     *             }
     *         }
     *     }
     */
    exports.plugin = function (...plugs) {
        plugs.forEach(p => {

            function _register(pl) {
                if (plugins.has(pl.id)) return console.warn(pl.id + ' is already registered')
                if (!plug[pl.type]) return console.warn('Unexpected plug-in type ' + pl.type)
                plugins.set(pl.id, pl)
                plug[pl.type].push(pl)
            }

            if (Array.isArray(p)) {
                p.forEach(v => _register(v))
            } else
                _register(p)
        })
        return {
            run: exports.plugin.run
        }
    }

    /**
     * @description Runs all registered plugins of type 'color'.
     */
    exports.plugin.run = function () {
        plug.color.forEach(v => v.fn.init(Color))
    }
    /**
     * @description Returns a color value from the color definitions, if it exists.
     * @param {string} color - The name of the color.
     * @returns {string|boolean} The color value if it exists, `false` otherwise.
     */
    exports.getColor = (color) => {
        if (typeof color !== 'string')
            return false;
        if (typeof define[color.toUpperCase()] !== 'undefined') return define[color.toUpperCase()];
        return false
    }
    /**
     * @description Adds a color definition.
     * @param {string} key - The name of the color.
     * @param {string} value - The value of the color.
     */
    exports.addDefine = function (key, value) {
        define[key] = value;
    }
    /**
     * @description Removes a color definition.
     * @param {string} key - The name of the color to remove.
     */
    exports.removeDefine = function (key) {
        delete define[key];
    }
    /**
     * @description Color detection, standardized processing methods
     * @param color{string} needs to be detected, processed by the default value when the color can be set
     * @return {Object} returns an object, and returns an error message {status: false, message: ""} when detection fails,
     * Returns processed data on success - color type, whether there is transparency, incoming color information, raw color array, extracted as base 10 color array status: true, message: null,
     * data: {type: 'hex' || 'rgb' || 'rgba',transparency: true || false ,color: 'string', strNum: [], colors: []}
     */
    exports.check = function (color) {
        if (typeof color !== 'string')
            throw new Error("Color type not is string");
        if (typeof define[color.toUpperCase()] !== 'undefined') color = define[color.toUpperCase()];
        color = cleanSpace(color)
        let c = color.match(/^(#|rgb|rgba)/g);
        if (c === null) return {status: false, message: "String color is neither rgb nor hexadecimal"};
        if (c[0].charAt(0) === '#') {
            if (color.length !== 7 && color.length !== 9 && color.length !== 4 && color.length !== 5) {
                throw new Error("If the string color is hexadecimal, it should be 6 bits, 8 bits, 3 bits or 4 bits")
            }
            if (color.at(0) !== '#') throw new Error("String color is neither rgb nor hexadecimal");
            color = color.toLowerCase();
            let err = color.match(/^#(\d|[abcdef])*/g);
            if (err[0].length !== color.length)
                throw new Error("Unexpected token in hex color : " + color.at(err[0].length));
            if (color.length === 4 || color.length === 5) {
                let colors = '#';
                for (let i = 1; i < color.length; i++)
                    colors += color.at(i) + color.at(i);
                color = colors;
            }
            let strNum = color.match(/(\d|[abcdef]){2}/g);
            let num = [];
            strNum.forEach((it, index) => {
                num.push(parseInt(it, 16));
            })
            if (num.length === 4) num[3] = num[3] / 255;
            if (color.length === 7) return {
                data: {type: 'hex', transparency: false, color: color, strNum: strNum, colors: num}
            };
            if (color.length === 9) return {
                data: {
                    type: 'hex',
                    transparency: true,
                    color: color, strNum: strNum, colors: num
                }
            };

        } else {
            if (color.substring(0, 4) === 'rgba') {
                let str = color.match(/^rgba\((\.\d+|\d+\.\d+|\d+),(\.\d+|\d+\.\d+|\d+),(\.\d+|\d+\.\d+|\d+),?((\.\d+%|\d+\.\d+%|\d+%)|\.\d+|\d+\.\d+|\d+)\)/g);
                if (str === null || str[0] !== color) {
                    throw new Error("Incorrect rgba format of string color")
                }
                let strNum = color.match(/((\.\d+%|\d+\.\d+%|\d+%)|\.\d+|\d+\.\d+|\d+)/g);
                let num = [];
                strNum.forEach((item, index) => {
                    let it;
                    if (index <= 2)
                        it = parseFloat(item);
                    else {
                        if (item.charAt(item.length - 1) !== '%') {
                            it = parseFloat(item)
                            if (it > 1) it = 1;
                        } else {
                            it = parseFloat(item);
                            it /= 100;
                            if (it > 1) it = 1;

                        }
                    }
                    num.push(it > 255 ? 255 : it);
                })
                if (num.length < 4) num.push(1);
                return {
                    n_data: {
                        color: color,
                        hex: strNum,
                        rgb: num
                    },
                    data: {
                        type: 'rgba',
                        transparency: true,
                        color: color, strNum: strNum, colors: num
                    }
                }
            }
            if (color.substring(0, 3) === 'rgb') {
                let str = color.match(/^rgb\((\.\d+|\d+\.\d+|\d+),(\.\d+|\d+\.\d+|\d+),(\.\d+|\d+\.\d+|\d+)\)/g);
                if (str === null || str[0] !== color) {
                    throw new Error("Incorrect rgb format of string color")
                }
                let strNum = color.match(/(\.\d+|\d+\.\d+|\d+)/g);
                let num = [];
                strNum.forEach((item, index) => {
                    let it = parseFloat(item);
                    num.push(it > 255 ? 255 : it);
                })
                return {
                    data: {
                        type: 'rgb',
                        transparency: false,
                        color: color, strNum: strNum, colors: num
                    }
                }
            }
            throw new Error(`The string color might be rgb or rgba, but is not declared in the header`)
        }
    }
    /**
     * @description This function accepts a color string, identifies its type (Hex, RGB, RGBA, HSL, HSLA), and returns a new object containing the color's value in different formats and some related functions.
     * @param {string} color - The color string to process. This should be a valid color value in Hex, RGB, RGBA, HSL, or HSLA format.
     * @returns {Object} The processed color object. The object includes:
     * - 'color': The original color value.
     * - 'type': The type of the color value (Hex, RGB, RGBA, HSL, HSLA).
     * - 'transparency': A boolean indicating whether the color has transparency.
     * - 'hxlArray': The color value in Hex format, split into an array.
     * - 'hxl': The color value in Hex format.
     * - 'rgba': The color value in RGBA format.
     * - 'rgbaArray': The color value in RGBA format, split into an array.
     * - 'hsla': The color value in HSLA format.
     * - 'hslaArray': The color value in HSLA format, split into an array.
     * - 'assemble':This is an object that contains assembly methods for arrays of different color types
     * - 'fns': This is an object that contains methods for other functions in Color
     * - 'split':This is an object that contains methods that divide different types of colors into arrays
     * - 'toType':This contains objects that convert methods between colors
     * The object also includes several functions for manipulating the color.
     * @throws {Error} Will throw an error if the color type is not recognized.
     */
    exports.checks = function (color) {
        if (typeof color !== 'string')
            throw new Error("Color type not is string");
        if (define[color.toUpperCase()]) color = define[color.toUpperCase()];
        color = cleanSpace(color).toLowerCase()
        const publicFn = {
            'assemble': _assemble,
            'split': _split,
            'toType': _toType,
            'fns': _fns,
        }
        plug.checks_public.forEach(v => v.fn.init(publicFn))

        function _outlet(obj) {
            obj.mark = mark
            mark.change()
            return Object.assign(publicFn, obj)
        }

        function _hxl(color) {
            const value = color.substring(1)
            const errorValue = value.match(/[^1234567890abcdefABCDEF]/g)
            if (errorValue) throw new Error('This color may be of type hxl, but unexpected characters ' + errorValue + ' appear')
            let newColor = ''
            let transparency = false;
            const format = {
                3: () => {
                    value.split('').forEach(v => newColor += v + v)
                    newColor += 'ff'
                },
                4: () => {
                    value.split('').forEach(v => newColor += v + v)
                    transparency = true
                },
                6: () => newColor += value + 'ff',
                8: () => {
                    newColor += value;
                    transparency = true
                },
            }
            if (!format[value.length]) throw new Error('If the string color is hexadecimal, it should be 6 bits, 8 bits, 3 bits or 4 bits ，but it now has only ' + value.length + ' bits')
            format[value.length]()
            return {
                color: color,
                type: 'hxl',
                hxlArray: _splitHxl(newColor),
                hxl: _assembleHxl(newColor),
                rgba: _hxlToRgba(newColor),
                rgbaArray: _splitRgba(_hxlToRgba(newColor)),
                hsla: _rgbaToHsla(_hxlToRgba(newColor)),
                hslaArray: _splitHsla(_rgbaToHsla(_hxlToRgba(newColor)))
            }
        }

        function _rgba(color) {
            const value = color.match(new RegExp(`rgba\\(${rgbaRegExp},${rgbaRegExp},${rgbaRegExp},${rgbaRegExp}\\)`, 'g'))
            if (!value) throw new Error('This color "' + color + ' " may be of type rgba, but it doesn\'t have four values or it\'s not an rgba')
            return {
                color: color,
                type: 'rgba',
                transparency: true,
                hxl: _assembleHxlArray(_rgbaToHxl(color)),
                hxlArray: _rgbaToHxl(color),
                rgba: _assembleRgbaArray(_splitRgba(color)),
                rgbaArray: _splitRgba(color),
                hsla: _rgbaToHsla(color),
                hslaArray: _splitHsla(_rgbaToHsla(color))
            }
        }

        function _rgb(color) {
            const value = color.match(new RegExp(`rgb\\(${rgbaRegExp},${rgbaRegExp},${rgbaRegExp}\\)`, 'g'))
            if (!value) throw new Error('This color "' + color + ' " may be of type rgb, but it doesn\'t have three values or it\'s not an rgb')
            const newColor = _assembleRgbaArray(_splitRgba(color))
            return {
                color: color,
                type: 'rgb',
                transparency: false,
                hxl: _assembleHxlArray(_rgbaToHxl(newColor)),
                hxlArray: _rgbaToHxl(newColor),
                rgba: newColor,
                rgbaArray: _splitRgba(newColor),
                hsla: _rgbaToHsla(newColor),
                hslaArray: _splitHsla(_rgbaToHsla(newColor))
            }
        }

        function _hsla(color) {
            const value = color.match(new RegExp(`hsla\\(${hslaRegExp},${hslaRegExp},${hslaRegExp},${hslaRegExp}\\)`, 'g'))
            if (!value) throw new Error('This color "' + color + ' " may be of type hsla, but it doesn\'t have four values, or it\'s not an hsla')
            const rgba = _hslaToRgba(color)
            return {
                color: color,
                type: 'hsla',
                transparency: true,
                hxl: _assembleHxlArray(_rgbaToHxl(rgba)),
                hxlArray: _rgbaToHxl(rgba),
                rgba: rgba,
                rgbaArray: _splitRgba(rgba),
                hsla: _rgbaToHsla(rgba),
                hslaArray: _splitHsla(_rgbaToHsla(rgba))
            }
        }

        function _hsl(color) {
            const value = color.match(new RegExp(`hsl\\(${hslaRegExp},${hslaRegExp},${hslaRegExp}\\)`, 'g'))
            if (!value) throw new Error('This color "' + color + ' " may be of type hsl, but it doesn\'t have three values, or it\'s not an hsl')
            const rgba = _hslaToRgba(color)
            return {
                color: color,
                type: 'hsl',
                transparency: false,
                hxl: _assembleHxlArray(_rgbaToHxl(rgba)),
                hxlArray: _rgbaToHxl(rgba),
                rgba: rgba,
                rgbaArray: _splitRgba(rgba),
                hsla: _rgbaToHsla(rgba),
                hslaArray: _splitHsla(_rgbaToHsla(rgba))
            }
        }


        const typeToFun = {
            'typeJudgment': function (color) {
                //正则表达式取出颜色类型，||[] 防止错误
                const type = (color.match(/^(#|rgba|rgb|hsla|hsl)/g) || [])[0]
                if (!type) throw new Error("This color '" + color + "'  is not hxl, rgb, rgba, hsl, hsla")
                return type
            },
            '#': _hxl,
            'rgba': _rgba,
            'rgb': _rgb,
            'hsla': _hsla,
            'hsl': _hsl
        }
        plug.checks_fn.forEach(v => v.fn.init(publicFn, typeToFun, color))
        return _outlet(typeToFun[typeToFun.typeJudgment(color)](color))

    }

    /**
     * @description Transforms the input color from rgb to hex or vice versa.
     * @param {string} color - The input color to be transformed.
     * @returns {string} The transformed color.
     */
    exports.transformation = function (color) {
        try {
            let handle = this.check(color);
            if (handle.data.type === 'rgb') {
                return rgbToHex(handle);
            }
            return hexToRgba(handle)
        } catch (e) {
            _error(e);
        }


    }


    /**
     * @description Converts a hex color to its rgba representation.
     * @param {Object} handle - The handle object that contains color information.
     * @returns {string} The rgba representation of the color.
     */
    function hexToRgba(handle) {
        let rgb = handle.data.colors.length === 3 ? 'rgb(' : 'rgba(';
        handle.data.colors.forEach((it, index) => {
            rgb += Math.round(it * 10000) / 10000;
            if (index !== handle.data.colors.length - 1) rgb += ',';
        })
        rgb += ')';
        return rgb;
    }

    /**
     * @description Converts an rgb color to its hexadecimal representation.
     * @param {Object} handle - The handle object that contains color information.
     * @returns {string} The hexadecimal representation of the color.
     */
    function rgbToHex(handle) {
        let hex = '#';
        handle.data.colors.forEach((it, index) => {
            let str;
            if (index <= 2) str = Math.round(it).toString(16);
            else str = Math.round((it * 256)).toString(16);
            hex += str.length === 2 ? str : '0' + str;
        })
        return hex;
    }

    /**
     * @description Removes all spaces from a string.
     * @param {string} str - The string from which to remove spaces.
     * @returns {string} The string without spaces.
     */
    function cleanSpace(str) {
        let value = '';
        for (const s of str) {
            if (s === ' ') continue;
            value += s;
        }
        return value;
    }

    /**
     * @description Generates a random color within the given range.
     * @param {string} start - The start color of the range. Defaults to '#0000'.
     * @param {string} end - The end color of the range. Defaults to '#ffff'.
     * @returns {string} A random color in rgba format.
     */
    exports.randomColor = function (start, end) {
        if (typeof start === 'undefined') start = '#0000';
        if (typeof end === 'undefined') end = '#ffff';
        try {
            let handleStart = this.check(start);
            let handleEnd = this.check(end);
            let rgba = 'rgba(';
            for (let i = 0; i < 4; i++) {
                if (i !== 3) {
                    let max = Math.max(handleStart.data.colors[i], handleEnd.data.colors[i]);
                    let min = Math.min(handleStart.data.colors[i], handleEnd.data.colors[i]);
                    rgba += (Math.floor(Math.random() * (max + 1 - min)) + min) + ',';
                } else {

                    let max = Math.max(typeof handleStart.data.colors[i] === 'undefined' ? 1 : handleStart.data.colors[i]
                        , typeof handleEnd.data.colors[i] === 'undefined' ? 1 : handleEnd.data.colors[i]);
                    let min = Math.min(typeof handleStart.data.colors[i] === 'undefined' ? 1 : handleStart.data.colors[i]
                        , typeof handleEnd.data.colors[i] === 'undefined' ? 1 : handleEnd.data.colors[i]);
                    rgba += Math.round((Math.random() * (max - min) + min) * 10000) / 10000;
                }
            }
            rgba += ')';
            return rgba;
        } catch (e) {
            _error(e)
        }

    }

    /**
     * @description Generates a function that gives the linear interpolated color at a specific time.
     * @param {string} start - The start color.
     * @param {string} end - The end color.
     * @param {number} interval - The duration from start color to end color.
     * @returns {Object} A set of functions, each corresponding to r, g, b, a and rgba color components.
     */
    exports.linearColor = function (start, end, interval = 1000) {
        if (typeof start === 'undefined') start = '#0000';
        if (typeof end === 'undefined') end = '#ffff';
        try {
            let handleStart = this.check(start);
            let handleEnd = this.check(end);
            let fun = {};
            let arr = ['r', 'g', 'b', 'a', 'rgba'];
            for (let i = 0; i < 4; i++) {
                if (i !== 3) {
                    let b = handleStart.data.colors[i];
                    let k = (handleEnd.data.colors[i] - b) / interval;
                    fun[arr[i]] = (time) => {
                        if (time > interval) return b + k * interval;
                        return b + k * time;
                    }
                } else {
                    let b = typeof handleStart.data.colors[i] === 'undefined' ? 1 : handleStart.data.colors[i];
                    let k = ((typeof handleEnd.data.colors[i] === 'undefined' ? 1 : handleEnd.data.colors[i]) - b) / interval;
                    fun[arr[i]] = function (time) {
                        if (time > interval) return b + k * interval;
                        return b + k * time;
                    }
                }
            }
            fun.rgba = function (time) {
                return `rgba(${this.r(time)},${this.g(time)},${this.b(time)},${this.a(time)})`
            }
            fun.rgb = function (time) {
                return `rgb(${this.r(time)},${this.g(time)},${this.b(time)})`;
            }
            return fun;
        } catch (e) {
            _error(e)
        }

    }
    /**
     * @description Generates a function that returns linear interpolated colors between two colors for a specific time.
     * @param {string} color1 - The first color.
     * @param {string} color2 - The second color.
     * @param {number} interval - The duration from color1 to color2.
     * @param {string} type - The color format of the input colors.
     * @returns {Function} A function that gives the interpolated color at a specific time.
     */
    exports.linearColors = function (color1, color2, interval = 1000, type = 'rgba') {
        try {
            const handle1 = this.checks(color1)[type + 'Array']
            const handle2 = this.checks(color2)[type + 'Array']
            const array = handle1.map((v, i) => {
                let b = handle1[i];
                let k = (handle2[i] - b) / interval;
                return (time) => {
                    if (time > interval) return b + k * interval;
                    return b + k * time;
                }
            })
            return function (time) {
                const value = array.map(v => v(time))
                return exports.toType(_assemble[type](value), type)
            }
        } catch (e) {
            _error(e)
        }
    }
    /**
     * @description Generates a function that returns multilinear interpolated colors among several colors for a specific time.
     * @param {Array} colors - An array of color strings.
     * @param {number|Array} interval - The duration for the interpolation, or an array of durations for each color transition.
     * @returns {Function} A function that gives the interpolated color at a specific time.
     */
    exports.multilinearColor = (colors = [], interval = 1000) => {
        if (colors.length < 2) throw new Error("color numbers must be at least 2");
        if (Array.isArray(interval) && interval.length !== colors.length - 1) throw new Error("The interval array length should be exactly the same as the colors array length minus one")
        if (typeof interval === 'number') {
            const time = interval;
            interval = [];
            for (let i = 0; i < colors.length - 1; i++)
                interval.push(time / (colors.length - 1))
        }
        const formatColor = [];
        for (const color of colors)
            formatColor.push(Color.check(color));
        const funTutor = [];
        for (let i = 0; i < formatColor.length - 1; i++) {
            funTutor.push(Color.linearColor(formatColor[i].data.color, formatColor[i + 1].data.color, interval[i]));
        }
        return (type, time) => {
            let index = 0;
            let count = interval[0];
            let realTime = time;
            for (let i = 1; i < interval.length; i++) {
                if (count > time) break;
                count += interval[i];
                realTime -= interval[i - 1];
                ++index;
            }
            return funTutor[index][type](realTime);
        }
    }
    /**
     * @description Generates a function that returns multilinear interpolated colors among several colors for a specific time.
     * @param {Array} colors - An array of color strings.
     * @param {number|Array} interval - The duration for the interpolation, or an array of durations for each color transition.
     * @param {string} type - The color format of the input colors.
     * @returns {Function} A function that gives the interpolated color at a specific time.
     */
    exports.multilinearColors = function (colors, interval, type) {
        if (typeof interval === 'number') {
            const time = interval;
            interval = [];
            for (let i = 0; i < colors.length - 1; i++)
                interval.push(time / (colors.length - 1))
        }
        const funTutor = colors.slice(0, colors.length - 1).map((v, i) => {
            return exports.linearColors(colors[i], colors[i + 1], interval[i], type)
        })
        return (time) => {
            let index = 0;
            let count = interval[0];
            let realTime = time;
            for (let i = 1; i < interval.length; i++) {
                if (count > time) break;
                count += interval[i];
                realTime -= interval[i - 1];
                ++index;
            }
            return funTutor[index](realTime);
        }
    }
    /**
     * @description This function changes the value of a single color channel (red, green, blue, alpha) in a given color.
     *
     * @param {string} color - The input color string in any valid CSS color format (e.g., hex, rgb, rgba, hsl, hsla).
     *
     * @returns {Object} An object with two methods:
     *                  - getColor: This method returns the modified color as a string in the RGBA format.
     *                  - setColor: This method changes the value of a color channel. It takes an options object where each key is the name of the color channel ('r', 'g', 'b', 'a') and the value is the new value for that channel.
     *
     * @throws {Error} Will throw an error if the color conversion or modification fails.
     */
    exports.changeColor = function (color) {
        try {
            const handleStart = this.checks(color);
            const colors = handleStart.rgbaArray;
            const fun = {
                getColor: function () {
                    return `rgba(${colors[0]},${colors[1]},${colors[2]},${colors[3]})`
                },
                setColor: function (options) {
                    const _change = (type, number) => {
                        if (type === 'r' || type === 'g' || type === 'b' || type === 'a') {
                            const map = {
                                r: 0,
                                g: 1,
                                b: 2,
                                a: 3,
                            }
                            colors[map[type]] = number;
                        }
                    }
                    for (const option in options) {
                        _change(option, options[option])
                    }
                    return fun;
                }
            }
            return fun
        } catch (e) {
            _error(e)
        }

    }
    /**
     * @description This function inverts the color and alpha channel of a given color.
     *
     * @param {string} color - The input color string in any valid CSS color format (e.g., hex, rgb, rgba, hsl, hsla).
     * @param {string} type - The color format to return. It could be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     *
     * @returns {string} The inverted color, in the format specified by the 'type' parameter.
     *
     * @throws {Error} Will throw an error if the color inversion fails.
     */
    exports.inversion = function (color, type) {
        try {
            const handle = this.checks(color);
            return Color.toType(`rgba(${[...handle.rgbaArray].splice(0, 3).map(v => 255 - v).concat(1 - handle.rgbaArray[3])})`, type)
        } catch (e) {
            _error(e)
        }
    }
    /**
     * @description Blends multiple colors together according to a specified blending mode.
     *              The available blending modes are "add", "sub", "over", and "multi".
     *              The alpha (opacity) of the colors can also be blended according to the options.
     *
     * @param {Array} colors - An array of color strings to blend. The colors should be specified in order of application.
     * @param {Object} options - An object with options for the blending operation. The options are:
     *                           - 'mode': The blending mode. It can be "add", "sub", "over", or "multi".
     *                           - 'alpha': Whether to blend the alpha (opacity) of the colors. If false, the alpha of the first color will be used.
     *                           - 'mixAlpha': Whether to blend the alpha in a way that simulates transparency. If false, the alphas will simply be added or subtracted.
     * @param {string} type - The color format to return. It could be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     *
     * @returns {string} The resulting color after blending, in the format specified by the 'type' parameter.
     *
     * @throws {Error} Will throw an error if the blending operation fails.
     */
    exports.blending = function (colors = [], options = {}, type) {
        try {
            const handle = colors.map(v => Color.checks(v))
            let [r, g, b, a] = handle[0].rgbaArray;
            const dispose = handle.slice(1)

            function _add() {
                dispose.forEach(v => {
                    const [vr, vg, vb, va] = v.rgbaArray
                    r = _limitRange(r + vr, 0, 255);
                    g = _limitRange(g + vg, 0, 255);
                    b = _limitRange(b + vb, 0, 255);
                    if (options.alpha)
                        if (options.mixAlpha) a = _alpha(a, va)
                        else a = _limitRange(a + va, 0, 1);
                })
            }

            function _sub() {
                dispose.forEach(v => {
                    const [vr, vg, vb, va] = v.rgbaArray
                    r = _limitRange(r - vr, 0, 255);
                    g = _limitRange(g - vg, 0, 255);
                    b = _limitRange(b - vb, 0, 255);
                    if (options.alpha)
                        if (options.mixAlpha) a = _alpha(a, va)
                        else a = _limitRange(a - va, 0, 1);
                })
            }

            function _over() {
                dispose.forEach(v => {
                    const [vr, vg, vb, va] = v.rgbaArray
                    r = _limitRange(vr < 28 ? (2 * r * vr / 255) : (255 - 2 * (255 - r) * (255 - vr) / 255), 0, 255);
                    g = _limitRange(vg < 28 ? (2 * g * vg / 255) : (255 - 2 * (255 - g) * (255 - vg) / 255), 0, 255);
                    b = _limitRange(vb < 28 ? (2 * b * vb / 255) : (255 - 2 * (255 - b) * (255 - vb) / 255), 0, 255);
                    if (options.alpha)
                        if (options.mixAlpha) a = _alpha(a, va)
                        else a = _limitRange(a + va, 0, 1);
                })
            }

            function _multi() {
                dispose.forEach(v => {
                    const [vr, vg, vb, va] = v.rgbaArray
                    r = _limitRange(r * vr / 255, 0, 255);
                    g = _limitRange(g * vg / 255, 0, 255);
                    b = _limitRange(b * vb / 255, 0, 255);
                    if (options.alpha)
                        if (options.mixAlpha) a = _alpha(a, va)
                        else a = _limitRange(a * va, 0, 1);
                })
            }

            function _alpha(a, va) {
                return _limitRange(a + va - a * va, 0, 1);
            }

            const fn = {
                add: _add,
                sub: _sub,
                over: _over,
                multi: _multi,
            }
            if (fn[options.mode]) {
                fn[options.mode]()
            }
            return Color.toType(_assembleRgbaArray([r, g, b, a]), type)
        } catch (e) {
            _error(e)
        }
    }
    /**
     * @description This function performs a linear interpolation between two colors based on a given ratio.
     * @param {string} color1 - The first color in any valid CSS color format.
     * @param {string} color2 - The second color in any valid CSS color format.
     * @param {number} t - The ratio to interpolate by (ranging from 0.0 to 1.0).
     * @param {string} name - The name of the color model to use for interpolation ('rgba' by default).
     * @param {string} type - The color format to return. It could be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     * @returns {string} The interpolated color in the format specified by the 'type' parameter.
     * @throws {Error} Will throw an error if the color interpolation fails.
     */
    exports.lerpColor = function (color1 = '#000000', color2 = '#ffffff', t = 0.5, name = 'rgba', type) {
        function _lerp(start, end, t) {
            return start * (1 - t) + end * t;
        }

        try {
            const colors = []
            const handle1 = this.checks(color1);
            const handle2 = this.checks(color2);
            handle1[name + 'Array'].forEach((v, i) => {
                colors.push(Math.round(_lerp(handle1[name + 'Array'][i], handle2[name + 'Array'][i], t)))
            })
            return this.toType(_assembleRgbaArray(colors), type)

        } catch (e) {
            _error(e)
        }


    }
    /**
     * @description This function adjusts the HSLA values of a given color.
     * @param {string} color - The input color string in any valid CSS color format (e.g., hex, rgb, rgba, hsl, hsla).
     * @param {string} type - The color format to return. It could be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     * @returns {function} A function that takes an options object where each key is the name of the color channel ('h', 's', 'b', 'a') and the value is the new value for that channel.
     * @throws {Error} Will throw an error if the color adjustment fails.
     */
    exports.hslaAdjustment = function (color, type) {
        try {
            const handle = this.checks(color);
            let [h, s, l, a] = handle.hslaArray
            return function (options) {
                if (options.h) h = _loopRange(h + options.h, 0, 359)
                if (options.s) s = _limitRange(s + options.s, 0, 100)
                if (options.b) l = _limitRange(l + options.b, 0, 100)
                if (options.a) a = _limitRange(a + options.a, 0, 1)
                return Color.toType(_assembleHslaArray([h, s, l, a], type))
            }
        } catch (e) {
            _error(e)
        }

    }
    /**
     * @description This function adjusts the contrast of an array of colors.
     * @param {Array<string>} colors - The array of input color strings in any valid CSS color format.
     * @param {number} contrast - The contrast adjustment factor.
     * @param {string} type - The color format to return. It could be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     * @returns {Array<string>} An array of adjusted colors in the format specified by the 'type' parameter.
     * @throws {Error} Will throw an error if the contrast adjustment fails.
     */
    exports.contrast = function (colors, contrast, type) {
        try {
            const adjustedColors = [];
            const handle = colors.map(v => Color.checks(v))
            handle.forEach(v => {
                const [h, s, l, a] = v.hslaArray
                const newL = l * contrast;
                const newS = s * contrast;
                adjustedColors.push(Color.toType(_assembleHslaArray([h, _limitRange(newS, 0, 100), _limitRange(newL, 0, 100), a]), type))
            })
            return adjustedColors
        } catch (e) {
            _error(e)
        }
    }
    /**
     * @description This function tints a color by mixing it with white using linear interpolation.
     * @param {string} color - The input color string in any valid CSS color format (e.g., hex, rgb, rgba, hsl, hsla).
     * @param {number} percentage - The percentage to mix with white.
     * @param {string} type - The color format to return. It could be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     * @returns {string} The tinted color in the format specified by the 'type' parameter.
     */
    exports.tint = function (color, percentage, type) {
        return this.lerpColor(color, `rgba(255, 255, 255, 1)`, percentage / 100, type)
    }
    /**
     * @description This function shades a color by mixing it with black using linear interpolation.
     * @param {string} color - The input color string in any valid CSS color format (e.g., hex, rgb, rgba, hsl, hsla).
     * @param {number} percentage - The percentage to mix with black.
     * @param {string} type - The color format to return. It could be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     * @returns {string} The shaded color in the format specified by the 'type' parameter.
     */
    exports.shade = function (color, percentage, type) {
        return this.lerpColor(color, `rgba(0, 0, 0, 0)`, percentage / 100, type)
    }
    /**
     * @description This function returns the complementary color of the given color.
     * @param {string} color - The input color string in any valid CSS color format (e.g., hex, rgb, rgba, hsl, hsla).
     * @param {string} type - The color format to return. It could be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     * @returns {string} The complementary color in the format specified by the 'type' parameter.
     */
    exports.complement = function (color, type) {
        return this.hslaAdjustment(color, type)({
            h: 180,
        })
    }

    /**
     * @description This function calculates the similarity between two colors in the RGBA color space.
     * @param {string} color1 - The first color string in any valid CSS color format.
     * @param {string} color2 - The second color string in any valid CSS color format.
     * @returns {number} The Euclidean distance between the two colors in the RGBA color space. The higher the number, the more similar the colors
     * @throws {Error} Will throw an error if the calculation fails.
     */
    exports.similarityRgba = function (color1, color2) {
        try {
            let handle1 = this.checks(color1);
            let handle2 = this.checks(color2);

            let [r1, g1, b1] = handle1.rgbaArray;
            let [r2, g2, b2] = handle2.rgbaArray;

            return Math.sqrt(Math.pow(r1 - r2, 2) + Math.pow(g1 - g2, 2) + Math.pow(b1 - b2, 2));
        } catch (e) {
            _error(e)
        }
    }
    /**
     * @description This function calculates the similarity between two colors in the HSLA color space.
     * @param {string} color1 - The first color string in any valid CSS color format.
     * @param {string} color2 - The second color string in any valid CSS color format.
     * @returns {number} The weighted average difference between the HSLA parameters of the two colors. The smaller the number, the more similar the colors are.
     * @throws {Error} Will throw an error if the calculation fails.
     */
    exports.similarityHsla = function (color1, color2) {
        try {
            let color1HSLA = this.checks(color1).hslaArray;
            let color2HSLA = this.checks(color2).hslaArray;
            const weights = [1, 1, 1];
            let similarity = 0;
            for (let i = 0; i < 3; i++) {
                // 计算 HSL 空间中两种颜色之间的差异 绝对值确保我们计算差异的大小
                let diff = Math.abs(color1HSLA[i] - color2HSLA[i]);
                //在 Hue 的情况下，我们需要考虑 Hue 参数的周期性。色调 0 和色调 360 是相同的颜色，因此我们使用模运算符来解释这一点。.
                if (i === 0) diff = diff % 360;
                // 将权重应用于分量差异并添加到总相似性
                similarity += diff * weights[i];
            }
            return similarity / 3;
        } catch (e) {
            _error(e);
        }
    }
    /**
     * @description Generates colors following a certain theme.
     * @param {string} color - An input color in a valid CSS color format.
     * @param {string} theme - The color theme, can be "comp"(complementary), "sComp"(split complementary), "similar"(analogous), "triadic", or "square".
     * @param {string} type - The format of color to return, can be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     * @returns {Array<string>} An array of colors in the theme.
     * @throws {Error} Throws an error if the theme name is unexpected.
     */
    exports.colorTheme = function (color, theme, type) {
        try {
            let hsl = this.checks(color).hslaArray;
            let [h, s, l, a] = hsl;
            let themes = {
                comp: [h, h + 180 % 360], // 对比色
                sComp: [h, h + 150 % 360, h + 210 % 360], // 拆分对比色
                similar: [h, h + 30 % 360, h - 30 % 360], // 相似色
                triadic: [h, h + 120 % 360, h + 240 % 360], // 三角色
                square: [h, h + 90 % 360, h + 180 % 360, h + 270 % 360] // 方形色
            };
            if (themes[theme]) {
                return themes[theme].map(hue => {
                    // 我们返回 hsl 格式的颜色
                    return this.toType(_assembleHslaArray([hue, s, l, a]), type);
                });
            } else {
                throw new Error('Unexpected theme name. The calling theme includes "complementary", "splitComplementary", "analogous", "triadic", "square"');
            }
        } catch (e) {
            _error(e);
        }
    }
    /**
     * @description Creates a sequence of color levels between two colors.
     * @param {string} color1 - The first color, in a valid CSS color format.
     * @param {string} color2 - The second color, in a valid CSS color format.
     * @param {number} levels - The number of color levels in the sequence.
     * @param {string} type - The format of color to return, can be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     * @returns {Array<string>} An array of colors in the sequence.
     * @throws {Error} Throws an error if the color transformation fails.
     */
    exports.seqLevels = function (color1, color2, levels, type = 'rgba') {
        try {
            const colors = []
            for (let i = 0; i < levels; i++) {
                colors.push(this.lerpColor(color1, color2, i / (levels - 1), type, type))
            }
            return colors
        } catch (e) {
            _error(e)
        }
    }
    /**
     * @description Converts an RGB color to a Lab color.
     * @param {string} color - An RGB color, in a valid CSS color format.
     * @returns {Array<number>} An array representing the color in Lab format.
     */
    exports.rgbToLab = function (color) {
        return _assembleLabArray(_xyzToLab(_rgbToXyz(color)).map(v => Math.round(v)))
    }
    /**
     * @description Converts a Lab color to an RGB color.
     * @param {string} color - A Lab color, in a valid CSS color format.
     * @returns {Array<number>} An array representing the color in RGB format.
     */
    exports.labToRgb = function (color) {
        return _assembleRgbaArray(_xyzToRgb(_labToXyz(color)).map(v => Math.round(v)))
    }
    /**
     * @description Converts a color to a specific color format.
     * @param {string} color - An input color in a valid CSS color format.
     * @param {string} type - The format of color to return, can be 'hxl', 'rgba', 'rgb', 'hsla', or 'hsl'.
     * @returns {string} The color in the desired format.
     * @throws {Error} Throws an error if the color transformation fails.
     */
    exports.toType = function (color, type = 'hxl') {
        try {
            const handle = Color.checks(color)
            if (type === 'hxl' || type === '#') return handle.hxl;
            if (type === 'rgb' || type === 'rgba') return handle.rgba;
            return handle.hsla
        } catch (e) {
            _error(e)
        }
    }


    function _error(e) {
        console.error(e)
    }

    function _limitRange(value, min, max) {
        return Math.max(Math.min(value, max), min)
    }

    function _loopRange(value, min, max) {
        return ((value - min) % (max - min + 1) + (max - min + 1)) % (max - min + 1) + min;
    }


    function _splitHxl(color) {
        return color.match(/\w{2}/g)
    }

    function _splitRgba(color) {
        color = color.match(new RegExp(`${rgbaRegExp}`, 'g'))
        return [...[...color].splice(0, 3).map(v => Math.round(v)), parseFloat(color[3]) || 1]
    }

    function _splitHsla(color) {
        return color.match(/[0123456789.]+/g).map(v => parseFloat(v))
    }

    function _assembleHxl(color) {
        return `#` + _splitHxl(color).join("")
    }

    function _assembleHxlArray(color) {
        return `#` + color.join("")
    }

    function _assembleRgbaArray(color) {
        return 'rgba(' + color + ')'
    }

    function _assembleHslaArray(color) {
        if (color.length === 3) return `hsl(${color})`
        return `hsla(${color})`
    }

    function _hxlToRgba(color) {
        const rgba = _splitHxl(color).map(v => parseInt(v, 16))
        rgba[3] /= 255
        return 'rgba(' + rgba + ')'

    }

    function _rgbaToHxl(color) {
        return _splitRgba(color).map((v, i) => i !== 3 ? Math.round(v).toString(16) : Math.round(v * 255).toString(16)).map(v => v.length !== 2 ? '0' + v : v)
    }

    function _rgbaToHsla(color) {
        color = _splitRgba(color).map(v => v / 255)
        const [r, g, b, a] = color
        const max = Math.max(r, g, b)
        const min = Math.min(r, g, b)
        let h, s, l = (max + min) / 2
        if (max === min) h = s = 0
        else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
            switch (max) {
                case r:
                    h = (g - b) / d + (g < b ? 6 : 0)
                    break;
                case g:
                    h = (b - r) / d + 2;
                    break;
                case b :
                    h = (r - g) / 2 + 4;
                    break;
            }
            h = h / 6 * 360
        }
        return `hsla(${Math.round(h)},${Math.round((s * 100))}%,${Math.round(l * 100)}%,${a * 255 || 1})`
    }

    function _hslaToRgba(color) {
        color = _splitHsla(color)
        let [h, s, l, a] = color
        s /= 100;
        l /= 100;
        let r, g, b;
        if (s === 0) r = g = b = l;
        else {
            const hue2rgb = function (p, q, t) {
                if (t < 0) t += 1;
                if (t > 1) t -= 1
                if (t < 1 / 6) return p + (q - p) * 6 * t;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            }
            let q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            let p = 2 * l - q;
            h = h / 360
            r = hue2rgb(p, q, h + 1 / 3)
            g = hue2rgb(p, q, h)
            b = hue2rgb(p, q, h - 1 / 3)
        }
        return `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},${a || 1})`
    }


    function _assembleLabArray(lab) {
        return `lab(${lab})`
    }

    function _splitLab(lab) {
        return Array.isArray(lab) ? lab : lab.match(new RegExp(labRegExp, 'g')).map(v => parseFloat(v))
    }

    function _rgbToXyz(color) {
        color = _splitRgba(color).map(v => v / 255).map(v => v > 0.04045 ? Math.pow(((v + 0.055) / 1.055), 2.4) : v / 12.92)
        const [r, g, b, a] = color
        let x, y, z;
        x = 0.412453 * r + 0.357580 * g + 0.180423 * b
        y = 0.212671 * r + 0.715160 * g + 0.072169 * b
        z = 0.019334 * r + 0.119193 * g + 0.950227 * b
        return [x, y, z, a]
    }

    const referenceWhite = [0.95047, 1.0, 1.08883]

    function _xyzToLab(xyz) {
        xyz = xyz.map((v, i) => v / referenceWhite[i]).map(v => v > Math.pow(6 / 29, 3) ? Math.pow(v, 1 / 3) : (1 / 3) * Math.pow(29 / 6, 2) * v + 16 / 116)
        const [x, y, z] = xyz;
        let l, a, b;
        l = 116 * y - 16;
        a = 500 * (x - y)
        b = 200 * (y - z)
        return [l, a, b]
    }

    function _labToXyz(lab) {
        let [l, a, b] = _splitLab(lab)
        let y = (l + 16) / 116
        let x = a / 500 + y
        let z = y - b / 200
        return [x, y, z].map(v => v > 6 / 29 ? Math.pow(v, 3) : (v - 16 / 116) * 3 * Math.pow(6 / 29, 2)).map((v, i) => v * referenceWhite[i])
    }

    function _xyzToRgb(xyz) {
        let [x, y, z] = xyz
        let r = x * 3.2406 + y * -1.5372 + z * -0.4986
        let g = x * -0.9689 + y * 1.8758 + z * 0.0415
        let b = x * 0.0557 + y * -0.2040 + z * 1.0570
        let [rr, gg, bb] = [r, g, b].map(v => v > 0.0031308 ? 1.055 * Math.pow(v, (1 / 2.4)) - 0.055 : 12.92 * v).map(v => v * 255)
        return [rr, gg, bb, 1]
    }

    const _assemble = {
        'rgba': _assembleRgbaArray,
        'rgb': _assembleRgbaArray,
        'hxl': _assembleHslaArray,
        '#': _assembleHslaArray,
        'hsl': _assembleHxlArray,
        'hsla': _assembleHslaArray,
        'lab': _assembleLabArray,
    }
    const _split = {
        'rgba': _splitRgba,
        'rgb': _splitRgba,
        'hxl': _splitHxl,
        '#': _splitHxl,
        'hsl': -_splitHsla,
        'hsla': _splitHsla,
        'lab': _assembleLabArray,
    }
    const _toType = {
        'hxlToRgba': _hxlToRgba,
        'rgbaToHxl': _rgbaToHxl,
        'rgbaToHsla': _rgbaToHsla,
        'rgbToXyz': _rgbToXyz,
        'hslaToRgba': _hslaToRgba,
        'xyzToRgb': _xyzToRgb,
        'xyzToLab': _xyzToLab,
        'labToXyz': _labToXyz,
    }
    const _fns = {
        'transformation': exports.transformation,
        'randomColor': exports.randomColor,
        'linearColor': exports.linearColor,
        'linearColors': exports.linearColors,
        'multilinearColor': exports.multilinearColor,
        'multilinearColors': exports.multilinearColors,
        'changeColor': exports.changeColor,
        'inversion': exports.inversion,
        'blending': exports.blending,
        'lerpColor': exports.lerpColor,
        'hslaAdjustment': exports.hslaAdjustment,
        'contrast': exports.contrast,
        'toType': exports.toType,
        'seqLevels': exports.seqLevels,
        'colorTheme': exports.colorTheme,
        'similarityHsla': exports.similarityHsla,
        'similarityRgba': exports.similarityRgba,
        'complement': exports.complement,
        'shade': exports.shade,
        'tint': exports.tint,
        'rgbToLab': exports.rgbToLab,
        'labToRgb': exports.labToRgb

    }

    return exports;
}({})
!function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else {
        root.Color = factory();
    }
}(this, function () {
    return Color
});

