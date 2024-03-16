cmake_minimum_required(VERSION 3.27)

project("Test Driven c++")

set(CMAKE_EXPORT_COMPILE_COMMANDS ON)

include(FetchContent)

FetchContent_Declare(
  googletest
  GIT_REPOSITORY https://github.com/google/googletest.git
  GIT_TAG        f8d7d77
)

FetchContent_MakeAvailable(googletest)

add_subdirectory(src)

