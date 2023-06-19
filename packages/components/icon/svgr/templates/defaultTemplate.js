const template = (variables, { tpl }) => {
	// convert variables.jsx to variable
	const jsxCode = variables.jsx;

	// replace <SVG> with <Icon>
	jsxCode.openingElement.name.name = 'Icon';
	jsxCode.closingElement.name.name = 'Icon';

	// remove xmlns, width, fill, height attributes
	const filteredAttributes = jsxCode.openingElement.attributes.filter(
		(attribute) =>
			attribute.name.name !== 'xmlns' &&
			attribute.name.name !== 'width' &&
			attribute.name.name !== 'height' &&
			attribute.name.name !== 'fill',
	);

	// add className attribute
	jsxCode.openingElement.attributes = [
		...filteredAttributes,
		{
			type: 'JSXAttribute',
			name: { type: 'JSXIdentifier', name: 'className' },
			value: {
				type: 'JSXExpressionContainer',
				expression: { type: 'Identifier', name: 'className' },
			},
		},
	];

	// Build the template
	return tpl`
    ${variables.imports};
    import { Icon } from '../../../src/icon';
    import { IIconProps } from '../../../src/types';

    ${variables.interfaces};

    const ${variables.componentName} = ({ className }: IIconProps) => {
      return (
        ${jsxCode}
      );
    };

		${variables.exports};
  `;
};

module.exports = template;
