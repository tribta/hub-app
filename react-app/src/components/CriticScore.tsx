import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 90 ? "green" : score > 80 ? "yellow" : "purple";
  return (
    <div>
      <Badge
        colorPalette={color}
        variant={"surface"}
        size={"md"}
        paddingX={2}
        borderRadius={"4px"}>
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
