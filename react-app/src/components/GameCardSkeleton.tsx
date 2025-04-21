import { Card, HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <div>
      <HStack gap="2">
          <Card.Root width={"300px"}>
            <Skeleton height="200px" />
            <Card.Body gap="2">
              <SkeletonText />
            </Card.Body>
          </Card.Root>
      </HStack>
    </div>
  );
};

export default GameCardSkeleton;
