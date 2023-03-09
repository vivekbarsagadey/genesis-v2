import IUserComponentProps from "../user.props";
// import Board from "@asseinfo/react-kanban";
// import "@asseinfo/react-kanban/dist/styles.css";
import Grid from "@mui/material/Grid/Grid";

interface KanbanComponentProps extends IUserComponentProps {}

const KanbanViewComponent = ({ items }: KanbanComponentProps) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          KanbanView
        </Grid>
      </Grid>
      {/* <Board
      allowRemoveLane
      allowRenameColumn
      allowRemoveCard
      onLaneRemove={console.log}
      onCardRemove={console.log}
      onLaneRename={console.log}
      initialBoard={board}
      allowAddCard={{ on: "top" }}
      onNewCardConfirm={(draftCard) => ({
        id: new Date().getTime(),
        ...draftCard
      })}
      onCardNew={console.log}
    /> */}
    </>
  );
};

export default KanbanViewComponent;
