export const selection = {
  name: 'type',
  type: 'list',
  message: 'What do you want to create?:',
  choices: [
    'Test for a component',
    'Scaffolding for a new screen',
  ],
};

export const naming = {
  name: 'component_name',
  type: 'input',
  message: 'Please, provide a name',
  validate: value => (value.length ? true : `Name can't be empty`),
};

export const isReduxActive = {
  name: 'isReduxActive',
  type: 'confirm',
  message: 'Do you use redux?',
};

export const component_selectors = {
  name: 'component_selectors',
  type: 'editor',
  message: 'Provide the selectors of your component',
};

export const component_actions = {
  name: 'component_actions',
  type: 'editor',
  message: 'Provide the actions of your component',
};

export const component_parent_dir = component_name => ({
  name: 'component_parent_dir',
  type: 'input',
  message: `Name of folder where "${component_name}" is located `,
});

export const screen_name = {
  name: 'screen_name',
  type: 'input',
  message: 'What is the name of the new screen?',
  validate: value => (value.length ? true : `Name can't be empty`),
};

export const screen_parentDir = {
  name: 'screen_parentDir',
  type: 'list',
  message: 'Seems the parent folder doesnt exist. Do you want me to create it?',
  choices: ['Yes', 'No'],
};

export const screen_type = {
  name: 'screen_type',
  type: 'list',
  message: 'What type of screen are you going to create?',
  choices: ['Filter/Table', 'None'],
};
