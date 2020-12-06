import { Sidebar, Stepper } from "../../components";
export const Times = () => {
  return (
    <>
      <Sidebar variation="right">
        <Stepper active={1}></Stepper>
      </Sidebar>
    </>
  );
};
