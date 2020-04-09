import {
  getValidLabels,
  transformedDate,
  extractAttributesFromMD,
  convertAttributesInObject,
  IsFormattedExpression,
} from './utils';
import { AM } from '@/services/api';

describe('getValidLabels =>', () => {
  test('should return an empty collection when pass an empty labels list', () => {
    expect(getValidLabels([])).toEqual([]);
  });

  test('should return a valid list without blog item', () => {
    const labelsWithBlog: AM.Label[] = [
      {
        color: 'irrelevant color',
        id: 'irrelevant id',
        name: 'blog',
      },
      {
        color: 'irrelevant color',
        id: 'irrelevant id',
        name: 'another',
      },
    ];

    const expectedLabels: AM.Label[] = [
      {
        color: 'irrelevant color',
        id: 'irrelevant id',
        name: 'another',
      },
    ];

    expect(getValidLabels(labelsWithBlog)).toEqual(expectedLabels);
  });

  test('should return an empty list when pass a list with just blog item', () => {
    const labelsWithBlog: AM.Label[] = [
      {
        color: 'irrelevant color',
        id: 'irrelevant id',
        name: 'blog',
      },
    ];

    expect(getValidLabels(labelsWithBlog)).toEqual([]);
  });
});

describe('transformedDate =>', () => {
  test("should return a string with follow format 'DayOfWeek, day month year'", () => {
    const validDate = new Date('03/29/2020');
    const result = transformedDate(validDate.toString());
    expect(result).toEqual('March 29, 2020');
  });
});

describe('Attributes from markdown =>', () => {
  describe('IsFormattedExpression:', () => {
    const beginningMark = '<!--';
    const endingMark = '-->';

    test('should false when pass an invalid expression', () => {
      expect(IsFormattedExpression('', beginningMark, endingMark)).toBeFalsy();
    });

    test('should false when pass an invalid expression', () => {
      expect(
        IsFormattedExpression(
          `<!-- description: Paso a paso sobre cómo crear un blog personal alojado en GitHub y posteando mediante issue.
    imgPath: 'Irrelevant path' -->

    Este post me sirve para hacer pruebas sobre el contenido, ver cómo se ve en la web y demás.`,
          beginningMark,
          endingMark
        )
      ).toBeTruthy();
    });
  });
  describe('extractAttributesFromMD:', () => {
    const markdown = `<!-- description: Paso a paso sobre cómo crear un blog personal alojado en GitHub y posteando mediante issue.
    imgPath: 'Irrelevant path' -->

    Este post me sirve para hacer pruebas sobre el contenido, ver cómo se ve en la web y demás.

    \`\`\`javascript
    const sum = (a, b) => a + b;
    \`\`\`

    ## Despliegue en GitHub Pages

    Las páginas de usuario deberán estar desplegadas en la rama \`master\`. Todavía estoy haciendo pruebas para ver cómo puedo hacer el despliegue correctamente sin tener los bundles en master pero bueno... voy en camino.`;

    test('should return a formatted content if it has a valid attribute config', () => {
      const expected = `description: Paso a paso sobre cómo crear un blog personal alojado en GitHub y posteando mediante issue.
    imgPath: 'Irrelevant path'`;

      expect(extractAttributesFromMD(markdown)).toEqual(expected);
    });
  });

  describe('convertAttributesInObject =>', () => {
    test('should return an empty object from empty expression', () => {
      const expression = '';

      const expected = {};

      expect(convertAttributesInObject(expression)).toEqual(expected);
    });

    test('should return a valid object from expression', () => {
      const expression = `description##irrelevant description.
      imagePath##irrelevant path.`;

      const expected = {
        description: 'irrelevant description.',
        imagePath: 'irrelevant path.',
      };

      expect(convertAttributesInObject(expression)).toEqual(expected);
    });
  });
});
