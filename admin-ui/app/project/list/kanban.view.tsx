import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import Grid from "@mui/material/Grid";
// import Board from "@asseinfo/react-kanban";
// import "@asseinfo/react-kanban/dist/styles.css";

const board = {
  columns: [
    {
      id: 1,
      title: "Backlog",
      cards: [
        {
          id: 1,
          title: "Card title 1",
          description: "Card content",
        },
        {
          id: 2,
          title: "Card title 2",
          description: "Card content",
        },
        {
          id: 3,
          title: "Card title 3",
          description: "Card content",
        },
      ],
    },
    {
      id: 2,
      title: "Doing",
      cards: [
        {
          id: 9,
          title: "Card title 9",
          description: "Card content",
        },
      ],
    },
    {
      id: 3,
      title: "Q&A",
      cards: [
        {
          id: 10,
          title: "Card title 10",
          description: "Card content",
        },
        {
          id: 11,
          title: "Card title 11",
          description: "Card content",
        },
      ],
    },
    {
      id: 4,
      title: "Production",
      cards: [
        {
          id: 12,
          title: "Card title 12",
          description: "Card content",
        },
        {
          id: 13,
          title: "Card title 13",
          description: "Card content",
        },
      ],
    },
  ],
};
const ProjectKanbanView = ({ projectData }) => {
  return (
    <>
      <Grid container px={2.5} pt={2}>
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

export default ProjectKanbanView;
