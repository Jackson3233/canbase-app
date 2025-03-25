import React from "react";
import { router } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View, Image, StyleSheet } from "react-native";
import { useAppSelector } from "@/store/hook";
import { Card } from "@/components";
import { isEmpty } from "@/lib/functions";
import { cn } from "@/lib/utils";
import Constants from "expo-constants";

const BadgeImage = require("@/assets/images/badge.png");

const ChatScreen: React.FC = () => {
  const { user } = useAppSelector((state) => state.user);
  const { channel } = useAppSelector((state) => state.channel);

  return (
    <View className="w-full h-full">
      <View className="relative overflow-hidden bg-[#00C978] rounded-b-xl">
        <Text style={styles.headerText}>Chat</Text>
        <Image className="absolute right-0 bottom-0" source={BadgeImage} />
      </View>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Pressable
            className="inline-flex self-start flex-row items-center gap-2 px-4 py-1 border border-[#EAEAEA] rounded-2xl"
            onPress={() => router.push("/(main)/home/chat/channel")}
          >
            <Feather name="plus" size={12} color="black" />
            <Text className="text-xs font-medium">Chat erstellen</Text>
          </Pressable>
          {!isEmpty(channel) && (
            <Card style={styles.cardContainer}>
              {channel
                ?.filter(
                  (f) =>
                    f.channeltype === "public" ||
                    (f.channeltype === "private" &&
                      (f.user === user?._id || f.owner?._id === user?._id))
                )
                .map((item, key) => {
                  return (
                    <View
                      key={key}
                      className={cn(
                        "px-5 py-4",
                        key !==
                          channel?.filter(
                            (f) =>
                              f.channeltype === "public" ||
                              (f.channeltype === "private" &&
                                (f.user === user?._id ||
                                  f.owner?._id === user?._id))
                          ).length - 1 && "border-b border-[#EAEAEA]"
                      )}
                    >
                      {item.channeltype === "public" ? (
                        <View className="flex flex-row items-center gap-x-3">
                          <View className="p-2 rounded-full bg-[#EFEFEF]">
                            <Feather name="hash" size={12} color="black" />
                          </View>
                          <View className="flex flex-col gap-y-0.5">
                            <Pressable
                              onPress={() =>
                                router.push({
                                  pathname: "/(main)/home/chat/[id]",
                                  params: { id: item.channelID as string },
                                })
                              }
                            >
                              <Text className="text-sm font-medium">
                                {item.channelname}
                              </Text>
                              <Text className="text-xs text-[#9F9F9F]">
                                {item.channelID}
                              </Text>
                            </Pressable>
                          </View>
                        </View>
                      ) : (
                        <View className="flex flex-row items-center gap-x-3">
                          <View className="p-2 rounded-full bg-[#EFEFEF]">
                            <Feather name="lock" size={12} color="black" />
                          </View>
                          <View className="flex flex-col gap-y-0.5">
                            <Pressable
                              onPress={() =>
                                router.push({
                                  pathname: "/(main)/home/chat/[id]",
                                  params: { id: item.channelID as string },
                                })
                              }
                            >
                              <Text className="text-sm font-medium">
                                {item.user === user?._id
                                  ? item.owner?.username
                                  : item.channelname}
                              </Text>
                              <Text className="text-xs text-[#9F9F9F]">
                                {item.channelID}
                              </Text>
                            </Pressable>
                          </View>
                        </View>
                      )}
                    </View>
                  );
                })}
            </Card>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    padding: 20,
    fontWeight: 800,
    fontSize: 20,
    lineHeight: 32,
    color: "#ffffff",
    marginTop: Constants.statusBarHeight,
  },
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    margin: 16,
    marginLeft: 20,
    marginRight: 20,
  },
  cardContainer: {
    backgroundColor: "#ffffff",
    padding: 0,
    borderRadius: 12,
    shadowColor: "#d5d5d5",
    elevation: 3,
  },
});

export default ChatScreen;
