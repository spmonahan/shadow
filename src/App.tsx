import * as React from 'react';
import {
  initializeIcons,
  DefaultButton,
  PrimaryButton,
  Stack,
  IStackTokens,
  SpinButton,
  Text,
  FontIcon,
  Icon,
  MergeStylesRootProvider_unstable,
  MergeStylesShadowRootProvider_unstable,
} from '@fluentui/react';
import { CompassNWIcon, DictionaryIcon, TrainSolidIcon } from '@fluentui/react-icons-mdl2';
// eslint-disable-next-line
import root from 'react-shadow';

initializeIcons();

// Example formatting
const stackTokens: IStackTokens = { childrenGap: 10 };

type TestCompProps = {
  inShadow: boolean;
};

const TestComp: React.FC<TestCompProps> = ({ inShadow }) => {
  const label = inShadow ? 'Shadow DOM' : 'Light DOM';

  const [disabled, setDisabled] = React.useState(false);
  const onClick = e => {
    setDisabled(!disabled);
  };

  return (
    <Stack tokens={stackTokens}>
      <Text variant="large">{label}</Text>
      {/* eslint-disable-next-line */}
      <DefaultButton text="Default" onClick={onClick} allowDisabledFocus disabled={disabled} />
      <PrimaryButton text="Primary" allowDisabledFocus disabled={disabled} />
      <SpinButton label="SpinButton" />
      <Stack tokens={{ childrenGap: 5 }}>
        <Text>FontIcons</Text>
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <FontIcon aria-label="Compass" iconName="CompassNW" />
          <FontIcon aria-label="Dictionary" iconName="Dictionary" />
          <FontIcon aria-label="Train" iconName="TrainSolid" />
        </Stack>
      </Stack>
      <Stack tokens={{ childrenGap: 5 }}>
        <Text>Icons</Text>
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <Icon aria-label="Compass" iconName="CompassNW" />
          <Icon aria-label="Dictionary" iconName="Dictionary" />
          <Icon aria-label="Train" iconName="TrainSolid" />
        </Stack>
      </Stack>
      <Stack tokens={{ childrenGap: 5 }}>
        <Text>SVG Icons</Text>
        <Stack horizontal tokens={{ childrenGap: 5 }}>
          <CompassNWIcon />
          <DictionaryIcon />
          <TrainSolidIcon />
        </Stack>
      </Stack>
    </Stack>
  );
};

export const App: React.FC = () => {
  // This is a ref but we're using state to manage it so we can force
  // a re-render.
  const [shadowRootEl, setShadowRootEl] = React.useState<HTMLElement | null>(null);

  return (
    <>
      {/* Root shadow DOM context. 
          You only need one per app and ideally it will be at
          the root of your React tree.
      */}
      <MergeStylesRootProvider_unstable>
        {/* Shadow DOM context.
            This example use `react-shadow` but that is not required (yet, that may change).
            Presently Fluent v8 just needs a reference to a shadowRoot.
        */}
        <root.div className="shadow-root" delegatesFocus ref={setShadowRootEl}>
          {/*
            Context for the shadow root.
            You need one per shadow root in your application.
            This context manages adopted only the styles that are needed
            based on the components rendered as its children.
          */}
          <MergeStylesShadowRootProvider_unstable shadowRoot={shadowRootEl?.shadowRoot}>
            <TestComp inShadow={true} />
          </MergeStylesShadowRootProvider_unstable>
        </root.div>
      </MergeStylesRootProvider_unstable>
      <TestComp inShadow={false} />
    </>
  );
};

export default App;