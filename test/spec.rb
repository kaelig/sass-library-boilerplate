#!/usr/bin/env ruby
# Encoding: utf-8

require_relative 'test-framework'
require 'fileutils'

describe "Compiling files with syntax errors" do
  stdout, stderr, status = Open3.capture3 "node-sass test/wrong-param-type.scss test/wrong-param-type.css"
  puts "Running node_modules/node-sass test/wrong-param-type.scss test/wrong-param-type.css"

  it "should fail to compile if the parameter is not a string" do
    not status.success? and
    not File.exist? 'test/wrong-param-type.css'
  end

  it "should throw a useful error message" do
    find "The parameter passed to project() must be a String.", stderr
  end
end

describe "Calling project()" do
  it "should output the default message" do
    find ".default{content:\"Default message"
  end
end

describe "Passing a message" do
  it "should output the message" do
    find ".passing-message{content:\"passed message"
  end
end

describe "Overriding the default message" do
  it "should output the overridden message" do
    find ".override{content:\"Overridden message"
  end
end
