# Color-Tool

Color tool is a library of color processing tools that supports HXL, RGB, HSL format processing and conversion, provides
a variety of color blending, extraction, linear change, random generation, interpolation, similarity analysis, accent
color generation, and supports 140 browser-supported default colors and multiple sets of colors

# Installation

```bash

npm install js-tool-color

```

# Usage

```javascript

//First import the Color-tool library
const Color = require('js-tool-color');

//You can then use the methods in the library
let checkColor = Color.checks('rgba(255,255,255,1)')

//It is worth noting that if you try to extend a method with a plugin, be sure to execute the following code before using the method
const yourPlugin = {} //Your plugin
Color.plugin(yourPlugin).run()

```

# Api

| name              | parameters                     | description                                                                                                                                                                                   |
|-------------------|--------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| addDefine         | key,value                      | Adds a color definition.                                                                                                                                                                      |
| blending          | colors,colors,type             | Blends multiple colors together according to a specified blending mode.                                                                                                                       |
| changeColor       | color                          | This function changes the value of a single color channel (red, green, blue, alpha) in a given color.                                                                                         |
| check             | color                          | Color detection, standardized processing methods                                                                                                                                              |
| checks            | color                          | This function accepts a color string, identifies its type (Hex, RGB, RGBA, HSL, HSLA), and returns a new object containing the color's value in different formats and some related functions. |
| colorTheme        | color,theme,type               | Generates colors following a certain theme.                                                                                                                                                   |
| complement        | color,type                     | This function returns the complementary color of the given color.                                                                                                                             |
| contrast          | colors,contrast,type           | This function adjusts the contrast of an array of colors.                                                                                                                                     |
| getColor          | color                          | Returns a color value from the color definitions, if it exists.                                                                                                                               |
| getThemeColors    | type,  theme                   | Gets a specific color set from a theme.                                                                                                                                                       |
| hslaAdjustment    | color,type                     | This function adjusts the HSLA values of a given color.                                                                                                                                       |
| inversion         | color,type                     | This function inverts the color and alpha channel of a given color.                                                                                                                           |
| labToRgb          | color                          | Converts a Lab color to an RGB color.                                                                                                                                                         |
| lerpColor         | color1, color2, t, name, type  | This function performs a linear interpolation between two colors based on a given ratio.                                                                                                      |
| linearColor       | start, end, interval           | Generates a function that gives the linear interpolated color at a specific time.                                                                                                             |
| linearColors      | color1, color2, interval, type | Generates a function that returns linear interpolated colors between two colors for a specific time.                                                                                          |
| multilinearColor  | colors, interval               | Generates a function that returns multilinear interpolated colors among several colors for a specific time.                                                                                   |
| multilinearColors | colors, interval, type         | Generates a function that returns multilinear interpolated colors among several colors for a specific time.                                                                                   |
| plugin            | plugs                          | Registers plugins to the library.                                                                                                                                                             |
| randomColor       | start, end                     | Generates a random color within the given range.                                                                                                                                              |
| removeDefine      | key                            | Removes a color definition.                                                                                                                                                                   |
| rgbToLab          | color                          | Converts an RGB color to a Lab color.                                                                                                                                                         |
| seqLevels         | color1, color2, levels, type   | Creates a sequence of color levels between two colors.                                                                                                                                        |
| shade             | color, percentage, type        | This function shades a color by mixing it with black using linear interpolation.                                                                                                              |
| similarityHsla    | color1, color2                 | This function calculates the similarity between two colors in the HSLA color space.                                                                                                           |
| similarityRgba    | color1, color2                 | This function calculates the similarity between two colors in the RGBA color space.                                                                                                           |
| tint              | color, percentage, type        | This function tints a color by mixing it with white using linear interpolation.                                                                                                               |
| toType            | color, type                    | Converts a color to a specific color format.                                                                                                                                                  |
| transformation    | color                          | Transforms the input color from rgb to hex or vice versa.                                                                                                                                     |

For complete API documentation, see [API documentation](https://spritebottle.github.io/)

# License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
