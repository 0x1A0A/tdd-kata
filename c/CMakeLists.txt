cmake_minimum_required(VERSION 3.27)

project("Test Driven c++")

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

add_subdirectory(vendors/Catch2)
add_subdirectory(src)

