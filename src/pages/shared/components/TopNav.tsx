import Menu from "./Menu";

const meinBerichOptions = [
  { label: "My published jokes", onClick: () => console.log("Mein Bericht") },
  {
    label: "My saved jokes",
    onClick: () => console.log("Meine Einstellungen"),
  },
  { label: "Account Information", onClick: () => console.log("Abmelden") },
  { label: "Pushlish new joke", onClick: () => console.log("Abmelden") },
];

const TopNav = () => {
  return (
    <div
      className="top-nav h-16 flex pr-40"
      style={{
        justifyContent: "right",
      }}
    >
      <Menu label="SO FUNKTIONIERT'S" options={meinBerichOptions} />
      <Menu label="SONDERANGEBOTE" options={meinBerichOptions} />
      <Menu label="MEIN BEREICH" options={meinBerichOptions} />
    </div>
  );
};

export default TopNav;
