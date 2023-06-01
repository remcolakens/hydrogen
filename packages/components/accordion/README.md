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
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@code-internet-applications/accordion"
```

## Component

- `Accordion`: manages the global state of all opened accordion items via
  context.
- `AccordionItem`: manages the state for a single accordion item.
- `AccordionButton`: the trigger to open/close an accordion item.
- `AccordionPanel`: the main content area for the accordion item.

## Usage

```
<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>Section 1 title</AccordionButton>
    </h2>
    <AccordionPanel>Panel 1</AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>Section 2 title</AccordionButton>
    </h2>
    <AccordionPanel>Panel 2</AccordionPanel>
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
```
