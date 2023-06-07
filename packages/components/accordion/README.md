# @code-internet-applications/accordion

An accordion is a vertically stacked set of interactive headings that each
contain a title or content snippet representing a section of content.

## Installation

```
pnpm add @code-internet-applications/accordion
```

## Import

```
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@code-internet-applications/accordion';
```

## Component

- `Accordion`: manages the global state of all opened accordion items via
  context.
- `AccordionItem`: manages the state for a single accordion item.
- `AccordionButton`: the trigger to open/close an accordion item.
- `AccordionPanel`: the main content area for the accordion item.

## Usage

```
<Accordion type="single" collapsible className="w-full">
	<AccordionItem value="item-1">
		<AccordionTrigger>Is it accessible?</AccordionTrigger>
		<AccordionContent>
			Yes. It adheres to the WAI-ARIA design pattern.
		</AccordionContent>
	</AccordionItem>
	<AccordionItem value="item-2">
		<AccordionTrigger>Is it styled?</AccordionTrigger>
		<AccordionContent>
			Yes. It comes with default styles that matches the other components
			aesthetic.
		</AccordionContent>
	</AccordionItem>
	<AccordionItem value="item-3">
		<AccordionTrigger>Is it animated?</AccordionTrigger>
		<AccordionContent>
			Yes. Its animated by default, but you can disable it if you prefer.
		</AccordionContent>
	</AccordionItem>
</Accordion>
```

## Contribution

See the
[contributing guidelines](https://github.com/code-internet-applications/cbt-hydrogen/blob/main/CONTRIBUTING.md)
for more details.

## Troubleshooting

To ensure that you can access the packages from the GitHub package registry,
make sure to add the following line to your `.npmrc` file in the root directory
of your project:

```
@code-internet-applications:registry=https://npm.pkg.github.com
public-hoist-pattern[]=@code-internet-applications/*

auto-install-peers=true
strict-peer-dependencies=false
enable-pre-post-scripts=true
node-linker=hoisted
```
