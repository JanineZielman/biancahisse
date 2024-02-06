import { Header } from "./Header";

export const Layout = ({
  alternateLanguages,
  navigation,
  settings,
  children,
  background_color,
  text_color
}) => {
  return (
    <>
      <Header
        alternateLanguages={alternateLanguages}
        navigation={navigation}
        settings={settings}
        background_color={background_color ? background_color : settings.data.background_color}
        text_color={text_color}
      />
      <main style={{'backgroundColor': settings.data.background_color}}>
        {children}
      </main>
    </>
  );
};
