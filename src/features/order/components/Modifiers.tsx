import React from 'react';

import ModifierGroup from './ModifierGroup';

function Modifiers({ modifiers }: { modifiers: Modifier[] }) {
  return modifiers.map((modifier) => (
    <ModifierGroup key={`modifier-${modifier.groupId}`} modifier={modifier} />
  ));
}

export default Modifiers;
