import React from "react";
import { Feather } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { cn } from "@/lib/utils";
import { ClubStatusPropsInterface } from "@/types/component";

const ClubStatus: React.FC<ClubStatusPropsInterface> = ({
  done,
  title,
  content,
  last = false,
}) => {
  return (
    <View
      className={cn(
        "flex flex-row items-center gap-5 px-6 py-3 w-full",
        !last && "border-b border-[#f3f3f3]",
        done && "hidden",
      )}
    >
      <View className="flex flex-1 flex-col gap-1">
        <Text className="text-sm font-bold">{title}</Text>
        <Text className="text-xs text-[#9F9F9F]">{content}</Text>
      </View>

      <Pressable className="w-7 h-7 flex items-center justify-center bg-[#F8F8F8] rounded-full">
        <Feather name="arrow-right" size={13} />
      </Pressable>
    </View>
  );
};

export default ClubStatus;
