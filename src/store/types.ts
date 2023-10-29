/* eslint-disable @typescript-eslint/no-unused-vars */

type MenuItemType = {
  itemId: number;
  name: string;
  description: string | undefined;
  subCategory: string;
  tags: string[];
  price?: string;
  photoUrl: string;
  notes: string | undefined;
};

type CategoryItemType = {
  category: string;
  notes: string[] | undefined;
  items: MenuItemType[];
};

type GroupedMenuResponseType = {
  menu: CategoryItemType[];
  categories: string[];
};

interface ModifierOption {
  optionId: number;
  name: string;
  price: number | null;
}

interface NestedOption {
  groupId: number;
  name: string;
  price: number | null;
}

interface Modifier {
  groupId: number;
  isRequired: boolean;
  minSelection: number;
  maxSelection: number;
  maxFree: number;
  name: string;
  options: (ModifierOption | NestedOption)[] | null;
}

// const [selectedOptions, setSelectedOptions] = useState<{
//   [modifierIndex: number]: SelectionType;
// }>({});

// const handleSelectOption = (modifier: number, option: number) => {
//   setSelectedOptions((options) => {
//     if (options[modifier]) {
//       // If the modifier is already selected, toggle the option.
//       if (Array.isArray(options[modifier])) {
//         // If it's an array, it means there are multiple selections.
//         if (options[modifier].includes(option)) {
//           // Deselect the option if it's already selected.
//           return {
//             ...options,
//             [modifier]: options[modifier].filter((item) => item !== option),
//           };
//         } else {
//           // Select the option if it's not already selected.
//           return {
//             ...options,
//             [modifier]: [...options[modifier], option],
//           };
//         }
//       } else {
//         // If it's not an array, it means there's only one selection.
//         if (options[modifier] === option) {
//           // Deselect the option if it's already selected.
//           return {
//             ...options,
//             [modifier]: null,
//           };
//         } else {
//           // Select the option if it's not already selected.
//           return {
//             ...options,
//             [modifier]: option,
//           };
//         }
//       }
//     } else {
//       // If the modifier is not selected, select it with the option.
//       return { ...options, [modifier]: option };
//     }
//   });
// };
